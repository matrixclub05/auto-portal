import {Component, OnInit} from '@angular/core';
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {Route, Router} from "@angular/router";
import {SignUpServiceComponent} from "../../../components/sign-up-service/sign-up-service.component";
import {User, Message} from "../../../global-services/data-objects/Message";
import {LoginServiceService} from "../../../global-services/login-service.service";
import {TestDriveComponent} from "../../../garage/test-drive/test-drive.component";

@Component({
  selector: 'app-store-services',
  templateUrl: './store-services.component.html',
  styleUrls: ['./store-services.component.scss']
})
export class StoreServicesComponent implements OnInit {

  constructor(private _modalService: NgbModal, private router: Router, private loginService: LoginServiceService) {
  }

  ngOnInit() {
  }

 /* protected openServiceSignUp($event) {
    const modalRef: NgbModalRef = this._modalService.open(SignUpForServiceComponent);
    modalRef.componentInstance.modalRef = modalRef;
  }*/
  protected openCredit(){
    this.router.navigate(['./service/credit']);
  }
  protected openTestDrive($event) {
    const modalRef: NgbModalRef = this._modalService.open(TestDriveComponent);
    modalRef.componentInstance.modalRef = modalRef;
    modalRef.componentInstance.testDriveMode = true;
  }
  protected openServiceSignUp($event) {
    const modalRef: NgbModalRef = this._modalService.open(SignUpServiceComponent);

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
}
