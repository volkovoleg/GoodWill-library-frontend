import { Injectable } from "@angular/core";
import {
    CanActivate,
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from "@angular/router";
import { Observable } from "rxjs/Observable";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate{


    constructor(private authService: AuthService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        let isAuth = this.authService.isAuthentificated();
        if(!isAuth){
            this.router.navigate['/login'];
        }
        return isAuth;
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        if(this.authService.isAuthentificated()){
            let roles = route.data['roles'] as Array<string>;
            if(!roles || this.authService.isInRoles(roles)) return true;
        }
        this.router.navigate['/login'];
        return false;
    }
}