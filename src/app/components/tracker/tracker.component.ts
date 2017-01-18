import {Component, OnInit, AfterViewInit} from '@angular/core';
import {UserNavigationHistoryService, TrackAction} from "../../global-services/user-navigation-history.service";
import {LoginServiceService} from "../../global-services/login-service.service";
import {User} from "../../global-services/data-objects/Message";

@Component({
  selector: 'tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.scss']
})
export class TrackerComponent implements OnInit, AfterViewInit {

  private _isOpen:boolean = false;
  private _actions:Array<TrackAction> = [];
  private _currentUser:User;

  constructor(private _nav:UserNavigationHistoryService, private _loginService:LoginServiceService)
  {

  }

  ngOnInit() {
  }

  ngAfterViewInit(){
  }

  private toggle()
  {
    this._isOpen = !this._isOpen;
    if(this._isOpen)
    {
      this._actions = this._nav.getActions();
      this._currentUser = this._loginService.getCurrentUser();
    }
  }
}
