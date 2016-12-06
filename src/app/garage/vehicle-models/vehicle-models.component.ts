import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {GarageDataService} from "../services/garage-data.service";
import {LoginServiceService} from "../../global-services/login-service.service";
import {CarData} from "../../global-services/data-objects/CarData";

@Component({
  selector: '[vehicle-models]',
  templateUrl: './vehicle-models.component.html',
  styleUrls: ['./vehicle-models.component.scss']
})
export class VehicleModelsComponent implements OnInit {

  @Input() section:string;
  @Output() onAdded = new EventEmitter<boolean>();

  protected _manufacturers:Array<string> = [];
  protected _vehicles:Array<string> = [];
  protected _years:Array<number> = [];

  protected _selectedManufacturer:string = "";
  protected _selectedVehicle:string = "";
  protected _selectedYear:string = "";

  constructor(private _garageDataService:GarageDataService, private _loginDataService:LoginServiceService)
  {

  }

  ngOnInit()
  {
    this.getManufacturers();
  }

  protected getManufacturers()
  {
    this._selectedVehicle = "";
    this._selectedYear = "";
    this._manufacturers = this._garageDataService.getManufacturersBySection(this.section);
  }

  protected getVehiclesByManufacturer()
  {
    if(this._selectedManufacturer != "")
    {
      this._selectedVehicle = "";
      this._selectedYear = "";
      this._vehicles = this._garageDataService.getVehiclesByManufacturer(this.section, this._selectedManufacturer);
    }
  }

  protected getVehicleYears()
  {
    if(this._selectedManufacturer != "" && this._selectedVehicle != "")
      this._selectedYear = "";
      this._years = this._garageDataService.getVehicleYears(this.section, this._selectedManufacturer, this._selectedVehicle);
  }

  protected saveCar()
  {
    if(this.readyForSave)
    {
      let userData = this._loginDataService.loginData.getUserData("garageCar");
      let car:CarData = new CarData(this._selectedManufacturer, this._selectedVehicle, parseInt(this._selectedYear));
      if(userData.carList.length == 0)
      {
        userData.selectedCar = car;
      }
      userData.carList.push(car);

      this._loginDataService.loginData.storeUserData("garageCar", userData);

      this.onAdded.emit(true);
    }
  }

  protected get readyForSave():boolean
  {
    return (this._selectedVehicle != "" && this._selectedYear != "" && this._selectedManufacturer != "");
  }
}
