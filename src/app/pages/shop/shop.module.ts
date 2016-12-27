import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import {SignUpForServiceComponent} from "../../garage/sign-up-for-service/sign-up-for-service.component";

@NgModule({
  imports: [
    CommonModule
  ],
  //declarations: [ MachinesComponent, PartsComponent, GoodsComponent],
  entryComponents: [SignUpForServiceComponent]
})
export class ShopModule { }
