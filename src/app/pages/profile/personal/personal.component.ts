import { Component, OnInit } from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {LoginServiceService} from "../../../global-services/login-service.service";
import {
  RegistrationFlowComponent,
  UserInputInfo
} from "../../../registration/registrationFlow/registration-flow.component";
import {Router} from "@angular/router";


@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {
  private user: UserInputInfo;
  constructor(private router: Router, private _loginService:LoginServiceService) { }

  ngOnInit() {
    if(!this._loginService.isLoggedIn){
      this.router.navigate(['./profile']);
    }else{
      this.user = this._loginService.getCurrentUser();
    }
  }

  private updateUser(){
    this._loginService.updateUser(this.user);
  }

}
