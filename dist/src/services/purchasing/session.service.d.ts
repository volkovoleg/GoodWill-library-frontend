import { Delivery, ManufactoringOrder } from "../../models/index";
export declare abstract class SessionService<T, U> {
    private NEW_ITEMS;
    private ITEMS_FOR_DELETE;
    constructor(NEW_ITEMS: any, ITEMS_FOR_DELETE: any);
    private get;
    private set;
    private clear;
    clearNewItems(): void;
    clearItemsForDelete(): void;
    getNewItems(): T[];
    getItemsForDelete(): U[];
    setNewItems(newItems: T[]): void;
    setItemsForDelete(itemsForDelete: U[]): void;
}
export declare class DeliverySessionService extends SessionService<Delivery, any> {
    constructor();
}
export declare class OrderSessionService extends SessionService<ManufactoringOrder, any> {
    constructor();
}
