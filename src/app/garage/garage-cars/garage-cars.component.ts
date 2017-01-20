import {Component, OnInit, AfterViewInit, AfterViewChecked, DoCheck} from '@angular/core';
import {LoginServiceService} from "../../global-services/login-service.service";
import {CarData} from "../../global-services/data-objects/CarData";
import {GarageDataService} from "../services/garage-data.service";
import {Vehicle} from "../../global-services/data-objects/Vehicle";

@Component({
  selector: '[garage-cars]',
  templateUrl: './garage-cars.component.html',
  styleUrls: ['./garage-cars.component.scss']
})
export class GarageCarsComponent implements OnInit {

  private _currentState:GarageCarsStates = GarageCarsStates.ADD_CARS_OR_SHOW_CARS;
  private _states = GarageCarsStates;
  private _carList:Array<Vehicle> = [];

  private _selectedCar:CarData = null;

  constructor(private _loginService:LoginServiceService, private _garageData:GarageDataService) { }

  ngOnInit() {
    this.updateCarList();
    setInterval(()=>{
      this.updateCarList();
    }, 1000);
  }

  onCarSelected(car:CarData):void
  {
    this._selectedCar = car;
    this._currentState = this._states.SERVICE_BOOK;
  }

  protected backFromServiceBook(data:boolean)
  {
    this._currentState = GarageCarsStates.ADD_CARS_OR_SHOW_CARS;
  }

  protected updateCarList()
  {
    let newCarList = this._loginService.loginData.getUserData("garageCar").carList;
    if(this._carList.length != newCarList.length)
      this._carList = newCarList;
  }
}

enum GarageCarsStates
{
  ADD_CARS_OR_SHOW_CARS, SERVICE_BOOK
}
