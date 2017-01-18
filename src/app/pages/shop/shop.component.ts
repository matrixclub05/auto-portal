import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from "@angular/router";
import {SignUpForServiceComponent} from "../../garage/sign-up-for-service/sign-up-for-service.component";
import {NgbModalRef, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {TestDriveComponent} from "../../garage/test-drive/test-drive.component";
import {SignUpServiceComponent} from "../../components/sign-up-service/sign-up-service.component";
import {User, Message} from "../../global-services/data-objects/Message";
import {LoginServiceService} from "../../global-services/login-service.service";

@Component({
  selector: 'app-shop',
  templateUrl: 'shop.component.html',
  styleUrls: ['shop.component.scss']
})
export class ShopComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private _modalService:NgbModal, public loginService: LoginServiceService) { }

  ngOnInit() {
  }
  protected openCredit(){
    this.router.navigate(['./service/credit']);
  }
  protected openSignUpService($event) {
    const modalRef: NgbModalRef = this._modalService.open(SignUpServiceComponent);

    //modalRef.componentInstance.car = this._car;
    modalRef.componentInstance.message = new Message({
      sentDate: new Date().toLocaleDateString(),
      description: '',
      subject: 'Запись на сервис',
      recipient: new User({
        fullName: 'Автосервис Усть-Каменогорск',
        firstName: 'Автосервис',
        lastName: 'Усть-Каменогорск',
        email: 'auto-service@bipek.kz',
        phoneNumber: '+77232522525',
        location: {name: 'Автосервис',city: 'Усть-Каменогорск', street: 'просп. Независимости', buildingNumber: '92/1'}
      }),
      sender: this.loginService.getCurrentUser()
    });

  }
  protected openTestDrive($event) {
    const modalRef: NgbModalRef = this._modalService.open(TestDriveComponent);
    modalRef.componentInstance.modalRef = modalRef;
    modalRef.componentInstance.testDriveMode = true;
  }
}
