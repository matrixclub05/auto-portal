import {Component, OnInit, ReflectiveInjector} from '@angular/core';
import {GarageDataService} from "../services/garage-data.service";
import {NgbTabChangeEvent} from "@ng-bootstrap/ng-bootstrap";
import {LoginServiceService} from "../../global-services/login-service.service";

@Component({
  selector: 'app-sign-up-for-service',
  templateUrl: './sign-up-for-service.component.html',
  styleUrls: ['./sign-up-for-service.component.scss']
})
export class SignUpForServiceComponent implements OnInit {

  protected _modalRef:any = null;

  private _testDriveMode:boolean = false;

  protected _manufacturers:Array<string> = [];
  protected _vehicles:Array<string> = [];

  protected _selectedManufacturer:string = "";
  protected _selectedVehicle:string = "";

  constructor(private _garageDataService:GarageDataService)
  {

  }

  ngOnInit() {

    this.getManufacturers();
  }

  protected getManufacturers()
  {
    this._manufacturers = this._garageDataService.getManufacturersBySection("Автомобили");
  }

  protected getVehiclesByManufacturer()
  {
    if(this._selectedManufacturer != "")
    {
      this._selectedVehicle = "";
      this._vehicles = this._garageDataService.getVehiclesByManufacturer("Автомобили", this._selectedManufacturer);
    }
  }

  protected beforeChange($event: NgbTabChangeEvent) {

  }

  public set modalRef(modalRef:any)
  {
    this._modalRef = modalRef;
  }


  set testDriveMode(value: boolean) {
    this._testDriveMode = value;
  }

  protected formSubmit()
  {
    if(this._modalRef)
    {
      this._modalRef.close();
    }
  }

}
