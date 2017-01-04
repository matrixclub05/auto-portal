import { Component, OnInit } from '@angular/core';
import {Ad} from "../../../global-services/data-objects/Ad";
import {NgbModalRef, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {SignUpForServiceComponent} from "../../sign-up-for-service/sign-up-for-service.component";
import {CarData} from "../../../global-services/data-objects/CarData";

@Component({
  selector: 'app-too-much-time-woservice',
  templateUrl: './too-much-time-woservice.component.html',
  styleUrls: ['./too-much-time-woservice.component.scss']
})
export class TooMuchTimeWOServiceComponent implements OnInit {

  private _car:CarData = null;
  private _modalRef:NgbModalRef = null;

  constructor(private _modalService:NgbModal) { }

  ngOnInit() {
  }

  public set car(car:CarData)
  {
    this._car = car;
  }

  public set modalRef(modalRef:NgbModalRef)
  {
    this._modalRef = modalRef;
  }

  private openService()
  {
    this._modalRef.close();

    const modalRef: NgbModalRef = this._modalService.open(SignUpForServiceComponent);
    modalRef.componentInstance.modalRef = modalRef;
    modalRef.componentInstance.testDriveMode = false;
  }
}
