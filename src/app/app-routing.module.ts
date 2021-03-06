///<reference path="pages/shop/cars/cars.component.ts"/>
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "./pages/main/component/main.component";
import {ProfileComponent} from "./pages/profile/component/profile.component";
import {CarStoreComponent} from "./pages/profile/car-store/car-store.component";
import {StartComponent} from "./pages/profile/start/start.component";
/*import {AboutComponent} from "./pages/about/about.component";*/
import {PersonalComponent} from "./pages/profile/personal/personal.component";
import {ShopComponent} from "./pages/shop/shop.component";
import {ServiceComponent} from "./pages/service/service.component";
import {CarsComponent} from "./pages/shop/cars/cars.component";
import {MachinesComponent} from "./pages/shop/machines/machines.component";
import {PartsComponent} from "./pages/shop/parts/parts.component";
import {GoodsComponent} from "./pages/shop/goods/goods.component";
import {ShoppingCartComponent} from "./pages/shop/shopping-cart/shopping-cart.component";
import {CreditCalcComponent} from "./components/credit-calc/credit-calc.component";
import {StartServiceComponent} from "./pages/service/start-service/start-service.component";
import {ServiceCreditComponent} from "./pages/service/service-credit/service-credit.component";
import {MarketComponent} from "./pages/shop/market/market.component";
import {MessagesComponent} from "./pages/profile/messages/messages.component";
/*import {GBEComponent} from "./pages/service/gbe/gbe.component";*/


const appRoutes: Routes = [

  {
    path: 'profile',
    component: ProfileComponent,
    children: [
      {
        path: '',
        component: CarStoreComponent
      },
      {
        path: 'car-store',
        component: CarStoreComponent
      },
      {
        path: 'personal',
        component: PersonalComponent
      },
      {
        path: 'messages',
        component: MessagesComponent
      }
    ]
  },

  { path: '', component: MainComponent },

  /*{ path: 'about', component: AboutComponent },*/
  { path: 'shop', component: ShopComponent,
    children: [
      {
        path: 'cars',
        component: CarsComponent
      },
      {
        path: 'market',
        component: MarketComponent
      },
      {
        path: 'machines',
        component: MachinesComponent
      },
      {
        path: 'parts',
        component: PartsComponent
      },
      {
        path: 'cart',
        component: ShoppingCartComponent
      },
      {
        path: 'goods',
        component: GoodsComponent
      },
      { path: 'credit-calc', component: CreditCalcComponent }

    ]
  },
  { path: 'service', component: ServiceComponent,
    children: [
      {
        path: '',
        component: StartServiceComponent
      },
      {
        path: 'credit',
        component: ServiceCreditComponent
      },
      /*{
        path: 'gbe',
        component: GBEComponent
      },*/
      { path: 'credit-calc', component: CreditCalcComponent },
      {
        path: 'parts',
        component: PartsComponent
      },
      {
        path: 'cart',
        component: ShoppingCartComponent
      },
      {
        path: 'goods',
        component: GoodsComponent
      },
      { path: 'credit-calc', component: CreditCalcComponent }

    ]
  },



];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

