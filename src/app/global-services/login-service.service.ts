import {Injectable} from '@angular/core';
import {LoggedInData} from "./data-objects/LoggedInData";
import {LoginStrategies} from "./data-objects/LoginStategies";

import {Router} from '@angular/router';
import {UserNavigationHistoryService} from "./user-navigation-history.service";
import {User} from "./data-objects/Message";

@Injectable()
export class LoginServiceService {

  private __DEFAULT_LOGIN_KEY: string = "___DEFAULT_LOGIN_KEY_4320984";
  private _currentLoginStrategy: LoginStrategies = LoginStrategies.LocalStorageFlow;
  private _loginData: LoggedInData = null;
  private _currentUser: User;

  constructor(private router: Router, private _userNavService:UserNavigationHistoryService) {
    let loginKey: string = localStorage.getItem("siteLoginKey");
    if (!loginKey) {
      loginKey = this.__DEFAULT_LOGIN_KEY;
    }else{
      this._currentUser = <User>(localStorage.getItem("users_" + loginKey) || new User());
    }

    this._loginData = new LoggedInData(loginKey);
    this._userNavService.loginName = loginKey;
  }

  public track(actionName:string)
  {
    this._userNavService.trackAction(actionName);
  }

  public tryLoginUser(User: User) {
    switch (this._currentLoginStrategy) {
      case LoginStrategies.LocalStorageFlow: {
        this.loginWithLocalStorage(User);
        break;
      }
      case LoginStrategies.NormalFlow: {
        break;
      }
    }
  }

  public logOut() {
    localStorage.setItem("siteLoginKey", this.__DEFAULT_LOGIN_KEY);
    this._loginData = new LoggedInData(this.__DEFAULT_LOGIN_KEY);
    this.router.navigateByUrl('/');
  }

  private loginWithLocalStorage(user: User): void {
    localStorage.setItem("siteLoginKey", user.email);
    this.setCurrentUser(user);
    this._loginData = new LoggedInData(user.email);
  }
  private getUserById(id){
    return this._currentUser = <User>JSON.parse(localStorage.getItem("users_" + id));
  }
  public updateUser(user: User){
    debugger;
    localStorage.setItem("users_" + user.email, JSON.stringify(user));
  }
  public setCurrentUser(user: User){
    let cu = this.getUserById(user.email);

    if(cu && cu.login){
      this._currentUser = cu;
      localStorage.setItem("users_" + user.email, JSON.stringify(cu));
    }else {
      localStorage.setItem("users_" + user.email, JSON.stringify(user));
      this._currentUser = user;
    }

  }

  public getCurrentUser() {
    this._currentUser = <User>JSON.parse(localStorage.getItem("users_" + this._loginData.loginKey));
    return this._currentUser;
  }

  public get isLoggedIn(): boolean {
    return this._loginData.loginKey != this.__DEFAULT_LOGIN_KEY;
  }

  public get loginData(): LoggedInData {
    return this._loginData;
  }
}
