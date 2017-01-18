import {Component, OnInit} from '@angular/core';
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {
  RegistrationFlowComponent,
} from "../../registration/registrationFlow/registration-flow.component";
import {LoginServiceService} from "../../global-services/login-service.service";
import {Router} from '@angular/router';
import {SignUpForServiceComponent} from "../../garage/sign-up-for-service/sign-up-for-service.component";
import {TestDriveComponent} from "../../garage/test-drive/test-drive.component";
import {User, Message} from "../../global-services/data-objects/Message";
import {SignUpServiceComponent} from "../sign-up-service/sign-up-service.component";

@Component({
  selector: '[app-header]',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private _currentUser: User;
  private isMenuOpened: boolean = false;
  constructor(private _modalService: NgbModal, private _loginService:LoginServiceService) {
  }

  ngOnInit() {
    let user = this._loginService.getCurrentUser();
    if(user) {
      this._currentUser = user;
    }else{
      this._currentUser = new User();
    }
  }
  private toggleMenu(){
    this.isMenuOpened = !this.isMenuOpened;
  }
  private onMenuClick(e:any){
    if(e.target.tagName.toLowerCase() == 'a'){
      this.isMenuOpened = false;
    }
  }
  public openRegistrationModal(param: boolean) {
    let v = this._modalService.open(RegistrationFlowComponent);
    v.componentInstance.isLogin = param;
  }
  protected openTestDrive($event){
    const modalRef: NgbModalRef = this._modalService.open(TestDriveComponent);
    modalRef.componentInstance.modalRef = modalRef;
    modalRef.componentInstance.testDriveMode = true;
  }
  /*protected openSignUpService($event) {
    const modalRef: NgbModalRef = this._modalService.open(SignUpForServiceComponent);
    modalRef.componentInstance.modalRef = modalRef;
    modalRef.componentInstance.testDriveMode = true;
  }*/

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
      sender: this._loginService.getCurrentUser()
    });

  }
}
