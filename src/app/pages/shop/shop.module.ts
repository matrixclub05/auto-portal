import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsComponent } from './cars/cars.component';
import {Router, ActivatedRoute, Params} from "@angular/router";
import { MachinesComponent } from './machines/machines.component';
import { PartsComponent } from './parts/parts.component';
import { GoodsComponent } from './goods/goods.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import {SignUpForServiceComponent} from "../../garage/sign-up-for-service/sign-up-for-service.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CarsComponent, MachinesComponent, PartsComponent, GoodsComponent],
  entryComponents: [SignUpForServiceComponent]
})
export class ShopModule { }
