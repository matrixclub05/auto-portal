import {Component, OnInit, Input} from '@angular/core';
import {IGoods} from "../../../../global-services/data-objects/UserData";
import {LoginServiceService} from "../../../../global-services/login-service.service";

@Component({
  selector: '[shop-car]',
  templateUrl: './shop-car.component.html',
  styleUrls: ['./shop-car.component.scss']
})
export class ShopCarComponent implements OnInit {

  @Input() cars:Array<IGoods> = [];

  constructor(private _loginService:LoginServiceService) { }

  ngOnInit() {
    if(!this.cars)
    {
      let goods = this._loginService.loginData.getUserData("garageCar").shopCartData;

      for(var i = 0; i < goods.length; i++)
      {
        let good = goods[i];
        if(good.type == "Car")
        {
          this.cars.push(good);
        }
      }
    }
  }

}
