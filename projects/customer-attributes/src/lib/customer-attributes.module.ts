import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerAttributesComponent } from './customer-attributes.component';

@NgModule({
  declarations: [
    CustomerAttributesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CustomerAttributesComponent
  ]
})
export class CustomerAttributesModule { }
