import { Component, OnInit } from '@angular/core';
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {SignUpForServiceComponent} from "../../../garage/sign-up-for-service/sign-up-for-service.component";

@Component({
  selector: 'app-store-services',
  templateUrl: './store-services.component.html',
  styleUrls: ['./store-services.component.scss']
})
export class StoreServicesComponent implements OnInit {

  constructor(private _modalService:NgbModal) { }

  ngOnInit() {
  }

  protected openServiceSignUp($event)
  {
    const modalRef:NgbModalRef = this._modalService.open(SignUpForServiceComponent);
    modalRef.componentInstance.modalRef = modalRef;
  }
}
