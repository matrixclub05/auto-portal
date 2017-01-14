import { Component, OnInit } from '@angular/core';
import {UserNavigationHistoryService, TrackAction} from "../../global-services/user-navigation-history.service";

@Component({
  selector: 'tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.scss']
})
export class TrackerComponent implements OnInit {

  private _isOpen:boolean = false;
  private _actions:Array<TrackAction> = [];

  constructor(private _nav:UserNavigationHistoryService)
  {

  }

  ngOnInit() {
  }

  private toggle()
  {
    this._isOpen = !this._isOpen;
    if(this._isOpen)
    {
      this._actions = this._nav.getActions();
    }
  }
}
