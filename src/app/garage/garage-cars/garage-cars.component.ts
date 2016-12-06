import { Component, OnInit } from '@angular/core';
import {LoginServiceService} from "../../global-services/login-service.service";
import {CarData} from "../../global-services/data-objects/CarData";
import {GarageDataService} from "../services/garage-data.service";

@Component({
  selector: '[garage-cars]',
  templateUrl: './garage-cars.component.html',
  styleUrls: ['./garage-cars.component.scss']
})
export class GarageCarsComponent implements OnInit {

  private _currentState:GarageCarsStates = GarageCarsStates.ADD_CARS_OR_SHOW_CARS;
  private _states = GarageCarsStates;
  private _carList:Array<CarData> = [];

  private _selectedCar:CarData = null;

  constructor(private _loginService:LoginServiceService, private _garageData:GarageDataService) { }

  ngOnInit() {

  }

  onCarSelected(car:CarData):void
  {
    this._selectedCar = car;
    this._currentState = this._states.SERVICE_BOOK;
  }

  protected getAndSaveGarageCars():Array<CarData>
  {
    this._carList = this._loginService.loginData.getUserData("garageCar").carList;
    return this._carList;
  }

  protected backFromServiceBook(data:boolean)
  {
    this._currentState = GarageCarsStates.ADD_CARS_OR_SHOW_CARS;
  }
}

enum GarageCarsStates
{
  ADD_CARS_OR_SHOW_CARS, SERVICE_BOOK
}