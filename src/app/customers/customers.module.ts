import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CustomersComponent } from './customers.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { FilterTextBoxComponent } from './customers-list/filter-textboxcomponent';

@NgModule({
    declarations: [
        CustomersComponent,
        CustomersListComponent,
        FilterTextBoxComponent
    ],
    imports: [
        CommonModule
    ],
    providers: [],
    exports: [CustomersComponent]
})
export class CustomersModule { }
