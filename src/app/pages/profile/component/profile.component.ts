import { Component, OnInit } from '@angular/core';
import {LoginServiceService} from "../../../global-services/login-service.service";


@Component({
  selector: 'app-profile',
  templateUrl: 'profile.component.html',
  styleUrls: ['profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor( private _loginService:LoginServiceService) {

  }

  ngOnInit() {

  }

}
