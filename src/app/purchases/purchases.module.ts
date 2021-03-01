import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchasesRoutingModule } from './purchases-routing.module';
import { PurchaseListComponent } from './purchase-list/purchase-list.component';
import { PurchaseEditComponent } from './purchase-edit/purchase-edit.component';


@NgModule({
  declarations: [PurchaseListComponent, PurchaseEditComponent],
  imports: [
    CommonModule,
    PurchasesRoutingModule 
  ]
})
export class PurchasesModule { }
