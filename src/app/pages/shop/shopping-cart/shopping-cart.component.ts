import { Component, OnInit } from '@angular/core';
import {LoginServiceService} from "../../../global-services/login-service.service";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private _loginService:LoginServiceService) { }

  ngOnInit() {
    this._loginService.loginData.getUserData("garageCar").shopCartData
  }

}
