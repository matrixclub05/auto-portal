import {Component, OnInit, Input} from '@angular/core';
import {IGoods} from "../../../../global-services/data-objects/UserData";

@Component({
  selector: '[shop-car]',
  templateUrl: './shop-car.component.html',
  styleUrls: ['./shop-car.component.scss']
})
export class ShopCarComponent implements OnInit {

  @Input() cars:Array<IGoods> = [];

  constructor() { }

  ngOnInit() {
  }

}
