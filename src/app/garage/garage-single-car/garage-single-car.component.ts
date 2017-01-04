import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {CarData} from "../../global-services/data-objects/CarData";
import {DBServiceService} from "../../global-services/dbservice.service";

@Component({
  selector: '[app-garage-single-car]',
  templateUrl: 'garage-single-car.component.html',
  styleUrls: ['garage-single-car.component.scss']
})
export class GarageSingleCarComponent implements OnInit {

  @Input() _car:CarData;
  @Output() onSelected = new EventEmitter<CarData>();

  constructor(private _databaseService:DBServiceService) { }

  ngOnInit() {
  }

  protected select(car:CarData)
  {
    this.onSelected.emit(this._car);
  }

  public addToMarket()
  {
    this._databaseService.addFakeCarFromGarage(this._car.manufacturer,this._car.model,this._car.year);
  }

}
