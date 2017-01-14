import {Injectable} from "@angular/core";
import {Router, NavigationEnd} from "@angular/router";

@Injectable()
export class UserNavigationHistoryService {

  private _loginName: string = "";

  constructor(private _router: Router) {
    this._router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          let currentEvent: NavigationEnd = <NavigationEnd>event;
          this.trackNavigation(currentEvent.url);
        }
      }
    );

    this.trackNavigation(this._router.url);
  }

  public set loginName(name: string) {
    this._loginName = name;
  }

  public trackAction(actionName: string) {
    this.track(ActionType.Action, actionName);
  }

  public getActions(): Array<TrackAction> {
    let userNavigation: string = localStorage.getItem("TrackAction" + this._loginName);
    if (userNavigation) {
      return <Array<TrackAction>>(JSON.parse(userNavigation));
    }
    return [];
  }

  private track(action: ActionType, actionName: string) {
    let userNavigationArray: Array<TrackAction> = this.getActions();
    let curDate: Date = new Date();
    userNavigationArray.push({
      actionType: action,
      actionDescription: actionName,
      date: curDate.toLocaleDateString() + " " + curDate.getHours() + ":" + curDate.getMinutes()
    });

    localStorage.setItem("TrackAction" + this._loginName, JSON.stringify(userNavigationArray));
  }

  private trackNavigation(url: string) {
    this.track(ActionType.Navigation, url);
  }
}

export enum ActionType
{
  Navigation, Action
}

export class TrackAction {
  public actionType: ActionType;
  public actionDescription: string;
  public date: string;
}
