import { Component, OnInit } from '@angular/core';
import {LoginServiceService} from "../../../global-services/login-service.service";
import {IGoods} from "../../../global-services/data-objects/UserData";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  private _goods:Array<IGoods> = [];

  private _cars:Array<IGoods> = [];
  private _rest:Array<IGoods> = [];

  constructor(private _loginService:LoginServiceService) { }

  ngOnInit() {

    this._goods = this._loginService.loginData.getUserData("garageCar").shopCartData;

    for(var i = 0; i < this._goods.length; i++)
    {
      let good = this._goods[i];
      if(good.type == "Car")
      {
        this._cars.push(good);
      }
      else
      {
        this._rest.push(good);
      }
    }
  }

}
