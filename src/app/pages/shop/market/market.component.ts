import {Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import {AskToRegisterBanerComponent} from "../../../registration/ask-to-register-baner/ask-to-register-baner.component";
import {UserData} from "../../../global-services/data-objects/UserData";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {LoginServiceService} from "../../../global-services/login-service.service";

import {Ad} from "../../../global-services/data-objects/Ad";
import {DBServiceService} from "../../../global-services/dbservice.service";
import {Cars} from "../../../garage/draftData/Cars";

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.scss']
})
export class MarketComponent implements OnInit, AfterViewInit {

  @ViewChild('carPopOut') popOut;

  private MIN_ENGINE_CAPACITY:number = 0.8;
  private MAX_ENGINE_CAPACITY:number = 6.4;

  private _engineCapacityFrom:number = this.MIN_ENGINE_CAPACITY;
  private _engineCapacityTo:number = this.MAX_ENGINE_CAPACITY;

  protected carEngineTypes = ['Дизельный', "Бензиновый", 'LPG'];
  protected transmissionTypes = ['МКПП', "АКПП"];
  protected cities:Array<string> = ["Алматы", "Астана", "Актау", "Караганда"];
  protected _selectedCities:{} = {"Алматы":false, "Астана":false, "Актау":false, "Караганда":false};

  protected _selectedEngineType: {} = {'Дизельный': false, "Бензиновый": false, 'LPG': false};
  protected _selectedTransmissionTypes: {} = {'МКПП': false, "АКПП": false};

  protected _filterCarName: string = "";

  private _carList: Array<Ad> = [];

  private _carsToDisplay: Array<Ad> = [];

  private _carToAddToCart: Ad = null;

  private timeout = null;
  private isFilterOpened:boolean = false;

  private _searchCarBrand:string = "";
  private _searchCarModel:string = "";

  private _carsListByBrand = Cars.data;
  private _carBrands = Object.keys(Cars.data);
  private _carModels = [];

  private _isNew:Object = {new:true, used:true};

  constructor(private _modalService: NgbModal, private _loginService: LoginServiceService, private _dbService: DBServiceService) {
  }

  ngOnInit() {
    if (!this._loginService.isLoggedIn) {
      let modalInstance = this._modalService.open(AskToRegisterBanerComponent);
      modalInstance.componentInstance.modalInstance = modalInstance;
    }
  }

  ngAfterViewInit() {
    this.createCarForDisplay();
  }

  protected selectCars(filter?: Object) {
    //noinspection TypeScriptUnresolvedFunction
    this._dbService.selectCars(filter).then(this.setCarList.bind(this));
  }

  protected swipe(){
    this.isFilterOpened=!this.isFilterOpened;
  }
  protected setCarList(data: Array<Ad>) {
    this._carList = data;
    this._carsToDisplay = data;
  }

  protected onCarFilter($event) {
    this._filterCarName = $event.target.value.toUpperCase();
    this.createCarForDisplay();
  }

  protected createCarForDisplay() {
    let filter: Object = {};
    let selectedTransmissionTypes: Array<string> = [];
    let selectedEngineTypes: Array<string> = [];
    let selectedCities: Array<string> = [];

    for (var key in this._selectedEngineType) {
      if (this._selectedEngineType[key])
        selectedEngineTypes.push("'" + key + "'")
    }

    for (var key in this._selectedCities) {
      if (this._selectedCities[key])
        selectedCities.push("'" + key + "'")
    }


    for (var key in this._selectedTransmissionTypes) {
      if (this._selectedTransmissionTypes[key])
        selectedTransmissionTypes.push("'" + key + "'")
    }

    if (selectedEngineTypes.length > 0)
      filter['engineType'] = selectedEngineTypes;

    if (selectedTransmissionTypes.length > 0)
      filter['transmissionType'] = selectedTransmissionTypes;

    if (selectedCities.length > 0)
      filter['city'] = selectedCities;

    if(this._filterCarName != "")
      filter['carName'] = this._filterCarName;

    if(this._searchCarBrand != "")
    {
      filter["brand"] = "'" + this._searchCarBrand + "'";
      if(this._searchCarModel != "")
        filter['model'] =  "'" + this._searchCarModel  + "'";
    }

    if(!((this._isNew["new"] && this._isNew["used"]) || (!this._isNew["new"] && !this._isNew["used"])))
      filter["isNew"] = !this._isNew["new"];

    filter['engineCapacity'] = [this._engineCapacityFrom, this._engineCapacityTo];

    this.selectCars(filter);
  }

  protected haveARide(car: Ad) {
    let ud: UserData = this._loginService.loginData.getUserData("garageCar");
    //ud.shopCartData.push(car);

    this._carToAddToCart = car;

    let pnE = this.popOut.nativeElement;
    pnE.style.display = "block";

    let k = function () {
      pnE.style.display = "none"
    };
    clearTimeout(this.timeout);
    this.timeout = setTimeout(k, 2000);
    this._loginService.loginData.storeUserData("garageCar", ud);
  }

  protected onCarBrandChange()
  {
    this._searchCarModel = "";
    if(this._searchCarBrand != '')
    {
      this._carModels = Object.keys(this._carsListByBrand[this._searchCarBrand]);
    }
    this.createCarForDisplay();
  }
}

