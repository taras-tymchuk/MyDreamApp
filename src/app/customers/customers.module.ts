import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CustomersComponent } from './customers.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { FilterTextBoxComponent } from './customers-list/filter-textboxcomponent';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        CustomersComponent,
        CustomersListComponent,
        FilterTextBoxComponent
    ],
    imports: [
        CommonModule,
        SharedModule
    ],
    providers: [],
    exports: [CustomersComponent]
})
export class CustomersModule { }
