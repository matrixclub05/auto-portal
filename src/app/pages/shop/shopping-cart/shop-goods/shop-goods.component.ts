import {Component, OnInit, Input} from '@angular/core';
import {IGoods} from "../../../../global-services/data-objects/UserData";
import {LoginServiceService} from "../../../../global-services/login-service.service";

@Component({
  selector: '[shop-goods]',
  templateUrl: './shop-goods.component.html',
  styleUrls: ['./shop-goods.component.scss']
})
export class ShopGoodsComponent implements OnInit {

  @Input() goods:Array<IGoods> = [];

  constructor(private _loginService:LoginServiceService) { }

  ngOnInit() {
    if(!this.goods)
    {
      let goods = this._loginService.loginData.getUserData("garageCar").shopCartData;

      for(var i = 0; i < goods.length; i++)
      {
        let good = goods[i];
        if(good.type != "Car")
        {
          this.goods.push(good);
        }
      }
    }
  }

}
