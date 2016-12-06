import { Component, OnInit } from '@angular/core';
import {GarageDataService} from "../services/garage-data.service";
import {LoginServiceService} from "../../global-services/login-service.service";
import {CarData} from "../../global-services/data-objects/CarData";

@Component({
  selector: '[cars-selector]',
  templateUrl: './cars-selector.component.html',
  styleUrls: ['./cars-selector.component.scss']
})
export class CarsSelectorComponent implements OnInit {

  private _selectedCarIndex:number = 0;

  private CAR_VIEW_STATES = CarViewState;
  private _carViewState:CarViewState = this.CAR_VIEW_STATES.CarView;

  constructor(private _garageData:GarageDataService, private _loginService:LoginServiceService) { }

  ngOnInit()
  {
  }

  protected get _carList():Array<CarData>
  {
    return this._loginService.loginData.getUserData("garageCar").carList;
  }

  protected get selectedCar()
  {
    let carData:CarData = null;
    if(this._carList.length > this._selectedCarIndex)
    {
      carData = this._carList[this._selectedCarIndex];
    }
    return carData;
  }

  protected setSelectedIndex(index:number)
  {
    this._carViewState = CarViewState.CarView;
    this._selectedCarIndex = index;

    let userData = this._loginService.loginData.getUserData("garageCar");

    let car:CarData = this._carList[this._selectedCarIndex];
    if(userData.carList)
    {
      userData.selectedCar = car;
    }

    this._loginService.loginData.storeUserData("garageCar", userData);
  }

  protected openServiceBook(car:CarData)
  {
    this._carViewState = CarViewState.ServiceBook;
  }

  protected showCar(data:boolean)
  {
    this._carViewState = CarViewState.CarView;
  }

}


enum CarViewState
{
  CarView, ServiceBook
}
