import {Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import {AskToRegisterBanerComponent} from "../../../registration/ask-to-register-baner/ask-to-register-baner.component";
import {UserData} from "../../../global-services/data-objects/UserData";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {LoginServiceService} from "../../../global-services/login-service.service";

import {Ad} from "../../../global-services/data-objects/Ad";
import {DBServiceService} from "../../../global-services/dbservice.service";

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.scss']
})
export class MarketComponent implements OnInit, AfterViewInit {

  @ViewChild('carPopOut') popOut;

  public filter: any;
  protected carEngineTypes = ['Дизельный', "Бензиновый", 'LPG'];
  protected carEngineCapacity = ['2.0', '1.8', '1.6', '2.0T', '3.0T'];
  protected transmissionTypes = ['МКПП', "АКПП"];
  protected cities = ["Алматы", "Астана", "Актау", "Караганда"];

  protected _selectedEngineType: {} = {'Дизельный': false, "Бензиновый": false, 'LPG': false};
  protected _selectedEngineCapacity: {} = {'2.0': false, '1.8': false, '1.6': false, '2.0T': false, '3.0T': false};
  protected _selectedTransmissionTypes: {} = {'МКПП': false, "АКПП": false};

  protected _filterCarName: string = "";

  private _carList: Array<Ad> = [];

  private _carsToDisplay: Array<Ad> = [];

  private _carToAddToCart: Ad = null;

  private timeout = null;

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
    this._dbService.selectCars(filter).then(this.setCarList.bind(this));
  }

  protected setCarList(data: Array<Ad>) {
    this._carList = data;
    this._carsToDisplay = data;
  }

  protected onCarFilter($event) {
    this._filterCarName = $event.target.value.toLowerCase();
    this.createCarForDisplay();
  }

  protected createCarForDisplay() {
    let filter: Object = {};
    let selectedTransmissionTypes: Array<string> = [];
    let selectedEngineTypes: Array<string> = [];

    for (var key in this._selectedEngineType) {
      if (this._selectedEngineType[key])
        selectedEngineTypes.push("'" + key + "'")
    }


    for (var key in this._selectedTransmissionTypes) {
      if (this._selectedTransmissionTypes[key])
        selectedTransmissionTypes.push("'" + key + "'")
    }

    if (selectedEngineTypes.length > 0)
      filter['engineType'] = selectedEngineTypes;

    if (selectedTransmissionTypes.length > 0)
      filter['transmissionType'] = selectedTransmissionTypes;

    if(this._filterCarName != "")
      filter['carName'] = this._filterCarName.toUpperCase();

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
}

