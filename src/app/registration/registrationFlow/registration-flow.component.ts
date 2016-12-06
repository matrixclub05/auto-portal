import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {LoginServiceService} from "../../global-services/login-service.service";

@Component({
  selector: 'ngbd-modal-content',
  templateUrl: 'registration-flow.component.html',
  styleUrls: ['registration-flow.component.scss']
})
export class RegistrationFlowComponent {

  public isLogin: boolean = false;

  private RegistrationStatesEnum = RegistrationStates;
  private _currentRegistrationState: RegistrationStates = RegistrationStates.LOGIN;

  private _userInputInfo: UserInputInfo = new UserInputInfo();

  constructor(public _currentModal: NgbActiveModal, private _loginService: LoginServiceService) {
  }

  ngOnInit() {
    if (!this.isLogin) {
      this._currentRegistrationState = RegistrationStates.REGISTER;
    }
  }

  protected cancel() {
    this._currentModal.dismiss('Cross click')
  }

  protected buttonClick() {
    this._currentModal.close('Close click');
  }
  protected registerUser(): void {
    this._loginService.tryLoginUser(this._userInputInfo);
    this._currentModal.close();
  }
  protected logUserIn(): void {
    this._loginService.tryLoginUser(this._userInputInfo);
    this._currentModal.close();
  }

  protected get canLogin(): boolean {
    return (this._userInputInfo.login != "" && this._userInputInfo.password != "");
  }

  protected changeRegistrationStateTo(state: RegistrationStates) {
    this._currentRegistrationState = state;
  }

}

export class UserInputInfo {
  public login: string = "";
  public firstName: string = "";
  public lastName: string = "";
  public middleName: string = "";
  public password: string = "";
  public phoneNumber: string = ""
}

enum RegistrationStates
{
  LOGIN, REGISTER
}
