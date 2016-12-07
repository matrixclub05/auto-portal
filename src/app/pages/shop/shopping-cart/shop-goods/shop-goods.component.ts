import {Component, OnInit, Input} from '@angular/core';
import {IGoods} from "../../../../global-services/data-objects/UserData";

@Component({
  selector: '[shop-goods]',
  templateUrl: './shop-goods.component.html',
  styleUrls: ['./shop-goods.component.scss']
})
export class ShopGoodsComponent implements OnInit {

  @Input() goods:Array<IGoods> = [];

  constructor() { }

  ngOnInit() {
  }

}
