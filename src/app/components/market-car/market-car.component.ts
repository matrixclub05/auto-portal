import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {CarData} from "../../global-services/data-objects/CarData";
import {Vehicle, IVehicle} from "../../global-services/data-objects/Vehicle";
import {Ad} from "../../global-services/data-objects/Ad";

@Component({
  selector: 'app-market-car',
  templateUrl: './market-car.component.html',
  styleUrls: ['./market-car.component.scss']
})
export class MarketCarComponent implements OnInit {
  @Input() _car:Ad;
  @Output() onSelected = new EventEmitter<Ad>();
  constructor() {

  }

  ngOnInit() {

  }

}
