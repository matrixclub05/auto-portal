import { Component, OnInit } from '@angular/core';
import {GarageDataService} from "../services/garage-data.service";
import {NgbModalRef} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-garage',
  templateUrl: 'garage.component.html',
  styleUrls: ['garage.component.scss']
})
export class GarageComponent implements OnInit {

  private _modalRef:NgbModalRef = null;

  constructor(private _garageDataService:GarageDataService)
  {

  }

  ngOnInit() {
  }


  public set modalRef(modalRef:NgbModalRef)
  {
    this._modalRef = modalRef;
  }

  protected onCarAdded(flag:boolean)
  {
    if(this._modalRef)
    {
      this._modalRef.close("Просто так :)");
    }
  }
}
