import {Component, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {
  RegistrationFlowComponent,
  UserInputInfo
} from "../../registration/registrationFlow/registration-flow.component";
import {LoginServiceService} from "../../global-services/login-service.service";
import {Router} from '@angular/router';

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
}
