import {Component, OnInit, Input, EventEmitter, Output, ViewChild, AfterViewInit} from "@angular/core";
import {CarData} from "../../global-services/data-objects/CarData";
import {DBServiceService} from "../../global-services/dbservice.service";
import {PhotoMemoryService} from "../../global-services/photo-memory.service";

@Component({
  selector: '[app-garage-single-car]',
  templateUrl: 'garage-single-car.component.html',
  styleUrls: ['garage-single-car.component.scss'],
})
export class GarageSingleCarComponent implements OnInit {

  @Input() _car:CarData;
  @Output() onSelected = new EventEmitter<CarData>();
  @ViewChild('carImage') carImage;

  constructor(private _databaseService:DBServiceService, private _garageMemo:PhotoMemoryService) { }

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

  protected capturePhoto($event)
  {
    if($event.target.files.length > 0)
    {
      var file = $event.target.files[0];
      this._garageMemo.addCarImage(this._car, file);
    }
  }
}
