import { Component, OnInit } from '@angular/core';
import {IGoods, UserData} from "../../../global-services/data-objects/UserData";
import {LoginServiceService} from "../../../global-services/login-service.service";

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.scss']
})
export class GoodsComponent implements OnInit {

  private _types:Array<string> = [ "Автохимия", "Аккумуляторы", "Фильтры", "Автоэлектрика" ];
  private _selectedGoodsType:{} = { "Автохимия":true, "Аккумуляторы":false, "Фильтры":false, "Автоэлектрика":false };


  private _goodsListToDisplay:Array<Product> = [];
  private _goodsList:Array<Product> = [
    {name:"Жидкость в бачок омывателя Liqui Moly", type:"Автохимия", photo:"a", description:"Жидкость в бачок омывателя Liqui Moly Scheiben-Reiniger 0.25 л Яблоко"},
    {name:"Противоизносная присадка Liqui Moly CeraTec", type:"Автохимия", photo:"a", description:"Противоизносная присадка Liqui Moly CeraTec для двигателя 300 мл (3721)"},
    {name:"Тормозная жидкость Liqui Moly", type:"Автохимия", photo:"a", description:"Тормозная жидкость Liqui Moly Bremsflussigkeit DOT4 1 л (8834)"},
    {name:"Toyota Super Long Life Antifreeze Pre-Diluted", type:"Автохимия", photo:"a", description:"Антифриз Toyota Super Long Life Antifreeze Pre-Diluted 3.78 л (00272-SLLC2)"},
    {name:"Жмазка CX-80 Медная Аэрозоль", type:"Автохимия", photo:"a", description:"Смазка CX-80 Медная Аэрозоль 500 мл (CX-80-Сopper 500ml)"},
    {name:"Охлаждающая жидкость GreenCool", type:"Автохимия", photo:"a", description:"Охлаждающая жидкость GreenCool GC5010 Красная 10 л (001821)"},


    {name:"STARLINE  S BE 50L-400", type:"Аккумуляторы", photo:"a", description:"Аккумулятор Starline energy 50Ah 400En левый "+" ДШВ: 215x175x190"},
    {name:"XT Classic 44Ah", type:"Аккумуляторы", photo:"a", description:"Аккумулятор XT Classic 44Ah, EN 360 правый "+" 207X175X175 (ДхШхВ)"},
    {name:"Starline High Power 60Ah", type:"Аккумуляторы", photo:"a", description:"Аккумулятор Starline High Power 60Ah 540En правый "+" ДШВ: 242x175x190"},
    {name:"BOSCH  0 092 S40 190", type:"Аккумуляторы", photo:"a", description:"Аккумулятор Bosch (J)ТК S4 Silver 40Ah, EN 330 левый "+" 187x127x228 (ДхШхВ)"},

    {name:"Топливный фильтр", type:"Фильтры", photo:"a", description:"STARLINE  S SF PF7006"},
    {name:"BOSCH  0 450 904 059", type:"Фильтры", photo:"a", description:"Топливный фильтр"},
    {name:"BOSCH  0 092 S40 190", type:"Фильтры", photo:"a", description:"NIPPARTS  J1332020"},

    {name:"Блок кнопок стеклоподъемника 2190 Гранта", type:"Автоэлектрика", photo:"a", description:"Блок кнопок стеклоподъемника 2190 Гранта"},
    {name:"Rexxon 'Стандарт', 200 А, 1,8 м", type:"Автоэлектрика", photo:"a", description:"Провода вспомогательного запуска Rexxon Стандарт, 200 А, 1,8 м"},
    {name:"Качок B500", type:"Автоэлектрика", photo:"a", description:"Провода стартовые для автомобилей Качок B500, 3 м"},
    {name:"Phantom PH2151", type:"Автоэлектрика", photo:"a", description:"Разветвитель прикуривателя Phantom, на 3 гнезда"}
  ];


  constructor(private _loginService:LoginServiceService) { }

  ngOnInit() {
    this.createGoodListToDisplay();
  }

  protected createGoodListToDisplay()
  {
    this._goodsListToDisplay = [];
    for(var i = 0; i < this._goodsList.length; i++) {
      let product = this._goodsList[i];
      if (this._selectedGoodsType[product.type])
      {
        this._goodsListToDisplay.push(product);
      }
    }
  }

  protected addGoods(item)
  {
    let ud:UserData = this._loginService.loginData.getUserData("garageCar");
    ud.shopCartData.push(item);
    this._loginService.loginData.storeUserData("garageCar", ud);
  }
}

interface Product extends IGoods
{
  name:string;
  type:string;
  description:string;
  photo:string;
}
