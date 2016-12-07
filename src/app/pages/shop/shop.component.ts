import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from "@angular/router";
import {SignUpForServiceComponent} from "../../garage/sign-up-for-service/sign-up-for-service.component";
import {NgbModalRef, NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-shop',
  templateUrl: 'shop.component.html',
  styleUrls: ['shop.component.scss']
})
export class ShopComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private _modalService:NgbModal) { }

  ngOnInit() {
  }
  protected openCredit(){
    this.router.navigate(['./service/credit']);
  }
  protected openTestDrive($event) {
    const modalRef: NgbModalRef = this._modalService.open(SignUpForServiceComponent);
    modalRef.componentInstance.modalRef = modalRef;
    modalRef.componentInstance.testDriveMode = true;
  }
}
