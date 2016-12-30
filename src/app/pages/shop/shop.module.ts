import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import {SignUpForServiceComponent} from "../../garage/sign-up-for-service/sign-up-for-service.component";
import { MarketComponent } from './market/market.component';

@NgModule({
  imports: [
    CommonModule
  ],
  //declarations: [ MachinesComponent, PartsComponent, GoodsComponent],
  entryComponents: [SignUpForServiceComponent],
  declarations: [MarketComponent]
})
export class ShopModule { }
