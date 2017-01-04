import { Component, OnInit } from '@angular/core';
import {NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {Ad} from "../../../global-services/data-objects/Ad";

@Component({
  selector: 'app-market-service-book',
  templateUrl: './market-service-book.component.html',
  styleUrls: ['./market-service-book.component.scss']
})
export class MarketServiceBookComponent implements OnInit {

  private _modalRef:NgbModalRef = null;
  private _car:Ad = null;
  private _ownerData:Object = {};

  constructor()
  {

  }

  ngOnInit() {
  }


  public set modalRef(modalRef:NgbModalRef)
  {
    this._modalRef = modalRef;
  }

  public set car(car:Ad)
  {
    this._car = car;
    this._ownerData = JSON.parse(this._car.ownerData);
  }

  protected close()
  {
    this._modalRef.close();
  }
}
