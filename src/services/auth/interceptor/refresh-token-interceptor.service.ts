import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpClient } from "@angular/common/http";
import { AuthService } from "../auth.service";
import { Observable } from "rxjs/Observable";
import { Injectable, Injector } from "@angular/core";
import { Subscriber } from "rxjs/Subscriber";
import 'rxjs/add/operator/finally';

type CallerRequest = {
    subscriber: Subscriber<any>;
    failedRequest: HttpRequest<any>;
};

@Injectable()
export class RefreshTokenInterceptorService implements HttpInterceptor{

    private http: HttpClient;
    private authService: AuthService;
    /** Массив отклонённых запросов */
    private requests: CallerRequest[] = [];
    /** Поле состояния обновления */
    private refreshInProgress: boolean;
    
    constructor(private injector: Injector){
        this.authService = injector.get(AuthService);
    }

    /** Метод повторяет отклонённые запросы с новыми данными заголовка Authorization */
    private repeatFailedRequests(): void{
        this.requests.forEach((request) => {
            const newRequest = request.failedRequest.clone({ setHeaders: { Authorization: 'Bearer ' + localStorage.getItem("access_token") }});
            this.repeatRequest(newRequest, request.subscriber);
        });
        this.requests = [];
    }

    private repeatRequest(request: HttpRequest<any>, subscriber: Subscriber<any>): void{
        //Инжекция HttpClient происходит здесь, чтобы предотвратить переполнение стэка вызовов при инициализации приложения
        this.http = this.injector.get(HttpClient);
        request['repeat'] = true;
        this.http.request(request).subscribe(
            //Оповещаем в инициатор (success) ответ от сервера 
            (event) => subscriber.next(event),
            (error) => {
                if (error.status === 401) 
                    this.authService.logout();
                //Оповещаем в инициатор (error) ответ от сервера 
                subscriber.error(error);
            },
            //Complete запроса, отрабатывает finally инициатора
            () => subscriber.complete()
        );
      }
 
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        if (!req.url.includes('/api/') || req['repeat']) 
            return next.handle(req);
        //Оборачиваем Observable из вызывающего кода своим, внутренним Observable
        let observable = new Observable<HttpEvent<any>>((subscriber) => {
            //Как только вызывающий код сделает подписку мы попадаем сюда и 
            //подписываемся на наш HttpRequest (выполняем оригинальный запрос)
            let originalRequestSubscription = next.handle(req).subscribe(
                //Оповещаем в инициатор (success) ответ от сервера 
                (response) => subscriber.next(response),
                (error) => {
                    if (error.status === 401) 
                        this.handleUnauthorizedError(subscriber, req);
                    //Оповещаем в инициатор (error) ответ от сервера 
                    else
                        subscriber.error(error);
                    },
                //Complete запроса, отрабатывает finally инициатора
                () => subscriber.complete()
            );
            //На случай если в вызывающем коде произведена отписка от запроса, 
            //если не сделать отписку и здесь, в dev tools браузера не увидим 
            //отмены запросов, т.к. инициатор (например Controller) делает отписку 
            //от нашего враппера, а не от исходного запроса
            return () => originalRequestSubscription.unsubscribe();
        });
        //Возвращаем вызывающему коду Observable, который под нашим контролем здесь
        return observable;
    }

    private handleUnauthorizedError(subscriber: Subscriber<HttpEvent<any>>, req: HttpRequest<any>): void{
        //Сохраняем запрос в массив
        this.requests.push({ subscriber, failedRequest: req });
        if (!this.refreshInProgress) {
            this.refreshInProgress = true;
            this.authService.renewTokens().finally(() => this.refreshInProgress = false).subscribe(
                (response) => this.repeatFailedRequests(),
                (error) => this.authService.logout());
        }
    }
}