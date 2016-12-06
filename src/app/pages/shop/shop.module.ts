import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsComponent } from './cars/cars.component';
import {Router, ActivatedRoute, Params} from "@angular/router";
import { MachinesComponent } from './machines/machines.component';
import { PartsComponent } from './parts/parts.component';
import { GoodsComponent } from './goods/goods.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CarsComponent, MachinesComponent, PartsComponent, GoodsComponent]
})
export class ShopModule { }
