import {Component, OnInit} from '@angular/core';
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {
  RegistrationFlowComponent,
  UserInputInfo
} from "../../registration/registrationFlow/registration-flow.component";
import {LoginServiceService} from "../../global-services/login-service.service";
import {Router} from '@angular/router';
import {SignUpForServiceComponent} from "../../garage/sign-up-for-service/sign-up-for-service.component";
import {TestDriveComponent} from "../../garage/test-drive/test-drive.component";

@Component({
  selector: '[app-header]',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private _currentUser: UserInputInfo;
  private isMenuOpened: boolean = false;
  constructor(private _modalService: NgbModal, private _loginService:LoginServiceService) {
  }

  ngOnInit() {
    let user = this._loginService.getCurrentUser();
    if(user) {
      this._currentUser = user;
    }else{
      this._currentUser = new UserInputInfo();
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
  protected openSignUpService($event) {
    const modalRef: NgbModalRef = this._modalService.open(SignUpForServiceComponent);
    modalRef.componentInstance.modalRef = modalRef;
    modalRef.componentInstance.testDriveMode = true;
  }
}
