import { Injectable } from "@angular/core";
import { Delivery, ManufactoringOrder } from "../../models/index";



@Injectable()
export abstract class SessionService<T, U>{
    constructor(
        private NEW_ITEMS, private ITEMS_FOR_DELETE
    ){}

    private get<V>(name: string): V[]{
        let items: V[] = JSON.parse(localStorage.getItem(name));
        if(!items || items === null){
            items = [];
            this.set<V>(items, name);
        }
        return items;
    }

    private set<V>(newItems: V[], name: string){
        localStorage.setItem(name, JSON.stringify(newItems));
    }

    private clear(name: string){
        localStorage.removeItem(name);
    }

    public clearNewItems(){
        this.clear(this.NEW_ITEMS);
    }

    public clearItemsForDelete(){
        this.clear(this.ITEMS_FOR_DELETE);
    }

    public getNewItems(): T[]{
        return this.get<T>(this.NEW_ITEMS);
    }

    public getItemsForDelete(): U[]{
        return this.get<U>(this.ITEMS_FOR_DELETE);
    }

    public setNewItems(newItems: T[]){
        this.set<T>(newItems, this.NEW_ITEMS);
    }

    public setItemsForDelete(itemsForDelete: U[]){
        this.set<U>(itemsForDelete, this.ITEMS_FOR_DELETE);
    }
}

@Injectable()
export class DeliverySessionService extends SessionService<Delivery, any>{

    constructor(){
        super("new_deliveries", "deliveries_for_delete");
    }
}

@Injectable()
export class OrderSessionService extends SessionService<ManufactoringOrder, any>{
    
    constructor(){
        super("new_orders", "orders_for_delete");
    }
}