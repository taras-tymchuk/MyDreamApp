export interface ICustomer {
    id: number;
    name: string;
    city: string;
    orderTotal?: number;
    customerService: any;
}

export interface IOrder {
    customerId: number;
    orderItem: IOrderItem[];
}

export interface IOrderItem {
    id: number;
    productName: string;
    itemCount: number;
}
