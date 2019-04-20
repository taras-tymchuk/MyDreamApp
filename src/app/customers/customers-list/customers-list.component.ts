import { Component, OnInit } from '@angular/core';

import { ICustomer } from 'src/app/shared/interfaces';

import { ICustomer } from 'src/app/shared/interfaces';

@Component({
    selector: 'app-customers-list',
    templateUrl: './customers-list.component.html'
})

export class CustomersListComponent implements OnInit {

    filteredCustomers: ICustomer[] = [];
    customersOrderTotal: number;
    currencyCode: 'USD';

    constructor() { }

    ngOnInit() {

    }

    calculateOrders() {
        this.customersOrderTotal = 0;
        this.filteredCustomers.forEach((cust: ICustomer) => {
            this.customersOrderTotal += cust.orderTotal;
        });
    }
}
