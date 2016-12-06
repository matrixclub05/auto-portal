import {Injectable} from '@angular/core';
import {LoggedInData} from "./data-objects/LoggedInData";
import {LoginStrategies} from "./data-objects/LoginStategies";
import {UserInputInfo} from "../registration/registrationFlow/registration-flow.component";

@Injectable()
export class LoginServiceService {

  private __DEFAULT_LOGIN_KEY: string = "___DEFAULT_LOGIN_KEY_4320984";
  private _currentLoginStrategy: LoginStrategies = LoginStrategies.LocalStorageFlow;
  private _loginData: LoggedInData = null;
  private _currentUser: UserInputInfo = null;
  constructor() {
    let loginKey: string = localStorage.getItem("siteLoginKey");
    if (!loginKey) {
      loginKey = this.__DEFAULT_LOGIN_KEY;
    }else{
      this._currentUser = <UserInputInfo>(localStorage.getItem("users_" + loginKey) || new UserInputInfo());
    }

    this._loginData = new LoggedInData(loginKey)
  }

  public tryLoginUser(User: UserInputInfo) {
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
    this._loginData = new LoggedInData(this.__DEFAULT_LOGIN_KEY)
  }

  private loginWithLocalStorage(user: UserInputInfo): void {
    localStorage.setItem("siteLoginKey", user.login);
    this.setCurrentUser(user);
    this._loginData = new LoggedInData(user.login);
  }
  private getUserById(id){
    return this._currentUser = <UserInputInfo>JSON.parse(localStorage.getItem("users_" + id));
  }
  public updateUser(user: UserInputInfo){
    localStorage.setItem("users_" + user.login, JSON.stringify(user));
  }
  public setCurrentUser(user: UserInputInfo){
    let cu = this.getUserById(user.login);

    if(cu && cu.login){
      this._currentUser = cu;
      localStorage.setItem("users_" + user.login, JSON.stringify(cu));
    }else {
      localStorage.setItem("users_" + user.login, JSON.stringify(user));
      this._currentUser = user;
    }

  }

  public getCurrentUser() {
    this._currentUser = <UserInputInfo>JSON.parse(localStorage.getItem("users_" + this._loginData.loginKey));
    return this._currentUser;
  }

  public get isLoggedIn(): boolean {
    return this._loginData.loginKey != this.__DEFAULT_LOGIN_KEY;
  }

  public get loginData(): LoggedInData {
    return this._loginData;
  }
}
