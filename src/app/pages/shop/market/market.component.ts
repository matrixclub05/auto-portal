import {Component, OnInit, AfterViewInit, ViewChild, Injectable, PipeTransform} from '@angular/core';
import {CarShopSingleCar} from "../cars/cars.component";
import {AskToRegisterBanerComponent} from "../../../registration/ask-to-register-baner/ask-to-register-baner.component";
import {UserData} from "../../../global-services/data-objects/UserData";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {LoginServiceService} from "../../../global-services/login-service.service";
import {Cars} from "../../../garage/draftData/Cars";
import {Vehicle, IVehicle} from "../../../global-services/data-objects/Vehicle";
import {Ad} from "../../../global-services/data-objects/Ad";
import {Pipe} from "@angular/core/src/metadata/directives";

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

  constructor(private _modalService: NgbModal, private _loginService: LoginServiceService) {


    this.shuffle(this._carList);
  }

  protected cond(item) {

  }

  protected onCarFilter($event) {
    this._filterCarName = $event.target.value.toLowerCase();
    this.createCarForDisplay();
  }

  protected createCarForDisplay() {
    this._carsToDisplay = [];
    for (var i = 0; i < this._carList.length; i++) {
      let car = this._carList[i];


      if (this._selectedEngineCapacity[car.engineCapacity] && this._selectedEngineType[car.engineType] && this._selectedTransmissionTypes[car.transmissionType]) {
        if (this._filterCarName.length > 0) {
          if ([car.brand, car.model].join(' ').toLowerCase().indexOf(this._filterCarName) > -1) {
            this._carsToDisplay.push(car);
          }
        }
        else {
          this._carsToDisplay.push(car);
        }
      }
    }
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

  protected shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
      j = Math.floor(Math.random() * i);
      x = a[i - 1];
      a[i - 1] = a[j];
      a[j] = x;
    }
  }

  cartesian(args) {
    var r = [], arg = args, max = arg.length - 1;

    function helper(arr, i) {
      for (var j = 0, l = arg[i].length; j < l; j++) {
        var a = arr.slice(0); // clone arr
        a.push(arg[i][j]);
        if (i == max)
          r.push(a);
        else
          helper(a, i + 1);
      }
    }

    helper([], 0);
    return r;
  }

  ngOnInit() {
    if (!this._loginService.isLoggedIn) {
      let modalInstance = this._modalService.open(AskToRegisterBanerComponent);
      modalInstance.componentInstance.modalInstance = modalInstance;
    }
  }

  protected getRandomInt( min:number, max: number) {
    var _min = Math.ceil(min);
    var _max = Math.floor(max);
    return Math.floor(Math.random() * (_max - _min)) + _min;
  }

  ngAfterViewInit() {
    this._selectedEngineType[this.carEngineTypes[0]] = true;
    this._selectedEngineCapacity[this.carEngineCapacity[0]] = true;
    this._selectedTransmissionTypes[this.transmissionTypes[0]] = true;
    var currentYear = new Date().getFullYear();
    var aDaTa = Cars.accessoryData;
    for (let key in aDaTa) {
      let arr: string[] = this.cartesian([aDaTa[key].engineCapacity, aDaTa[key].engineType, aDaTa[key].transmissionType], this.cities);
      for (let i = 0; i < arr.length; i++) {

        this._carList.push(
          new Ad({
            engineType: arr[i][1],
            engineCapacity: arr[i][0],
            transmissionType: arr[i][2],
            city: this.cities[this.getRandomInt(0, this.cities.length-1)],
            year: this.getRandomInt(2000, currentYear),
            price: this.getRandomInt(500000, 10000000),
            brand: key.split(' ')[0],
            model: key.split(' ')[1],
            internalService: true,
            photo: aDaTa[key].photoPath,
            ownerId: ''
          })
        );

      }
    }

    this.createCarForDisplay();
  }

}


@Pipe({
  name: 'myfilter',
  pure: false
})
@Injectable()
export class MyFilterPipe implements PipeTransform {
  transform(items, ...filter): any {
    return items.filter(item => true);
  }
}
