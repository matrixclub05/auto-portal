import {Component, OnInit, AfterContentInit, AfterViewInit, ViewChild} from '@angular/core';
import {Cars} from "../../../garage/draftData/Cars";
import {AskToRegisterBanerComponent} from "../../../registration/ask-to-register-baner/ask-to-register-baner.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {LoginServiceService} from "../../../global-services/login-service.service";
import {UserData, IGoods} from "../../../global-services/data-objects/UserData";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit, AfterViewInit {

  @ViewChild('carPopOut') popOut;

  protected carEngineTypes = ['Дизельный', "Бензиновый", 'LPG'];
  protected carEngineCapacity = ['2.0', '1.8', '1.6', '2.0T', '3.0T'];
  protected transmissionTypes = ['МКПП', "АКПП"];

  protected _selectedEngineType: {} = {'Дизельный': false, "Бензиновый": false, 'LPG': false};
  protected _selectedEngineCapacity: {} = {'2.0': false, '1.8': false, '1.6': false, '2.0T': false, '3.0T': false};
  protected _selectedTransmissionTypes: {} = {'МКПП': false, "АКПП": false};

  protected _filterCarName: string = "";

  private _carList: Array<CarShopSingleCar> = [];

  private _carsToDisplay: Array<CarShopSingleCar> = [];

  private _carToAddToCart: CarShopSingleCar = null;

  private timeout = null;

  constructor(private _modalService: NgbModal, private _loginService: LoginServiceService) {
    var aDaTa = Cars.accessoryData;
    for (let key in aDaTa) {
      let arr: string[] = this.cartesian([aDaTa[key].engineCapacity, aDaTa[key].engineType, aDaTa[key].transmissionType]);
      for (let i = 0; i < arr.length; i++) {
        this._carList.push(new CarShopSingleCar(key, arr[i][0], arr[i][1], arr[i][2], aDaTa[key].photoPath));
      }
    }

    this.shuffle(this._carList);
  }

  protected onCarFilter($event) {
    this._filterCarName = $event.target.value.toLowerCase();
    this.createCarForDisplay();
  }

  protected createCarForDisplay() {
    this._carsToDisplay = [];
    for (var i = 0; i < this._carList.length; i++) {
      let car = this._carList[i];
      if (this._selectedEngineCapacity[car.engineCapacity] &&
        this._selectedEngineType[car.engineType] &&
        this._selectedTransmissionTypes[car.transmissionType]) {
        if (this._filterCarName.length > 0) {
          if (car.name.toLowerCase().indexOf(this._filterCarName) > -1) {
            this._carsToDisplay.push(car);
          }
        }
        else {
          this._carsToDisplay.push(car);
        }
      }
    }
  }

  protected haveARide(car: CarShopSingleCar) {
    let ud: UserData = this._loginService.loginData.getUserData("garageCar");
    ud.shopCartData.push(car);

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

  ngAfterViewInit() {
    this._selectedEngineType[this.carEngineTypes[0]] = true;
    this._selectedEngineCapacity[this.carEngineCapacity[0]] = true;
    this._selectedTransmissionTypes[this.transmissionTypes[0]] = true;
    this.createCarForDisplay();
  }

}


export class CarShopSingleCar implements IGoods
{
  public readonly type:string = "Car"

  constructor(public name:string,
  public engineCapacity:string,
  public engineType:string,
  public transmissionType:string,
  public photo:string)
  {

  }
}
