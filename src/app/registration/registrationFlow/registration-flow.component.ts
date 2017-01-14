import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {LoginServiceService} from "../../global-services/login-service.service";
import {Router} from '@angular/router';
import {User} from "../../global-services/data-objects/Message";

@Component({
  selector: 'ngbd-modal-content',
  templateUrl: 'registration-flow.component.html',
  styleUrls: ['registration-flow.component.scss']
})
export class RegistrationFlowComponent {

  public isLogin: boolean = false;

  private RegistrationStatesEnum = RegistrationStates;
  private _currentRegistrationState: RegistrationStates = RegistrationStates.LOGIN;
  private _userInputInfo: User = new User();

  constructor(public _currentModal: NgbActiveModal, private _loginService: LoginServiceService, private router: Router) {
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
    this.router.navigateByUrl('profile')
  }

  protected logUserIn(): void {
    this._loginService.tryLoginUser(this._userInputInfo);
    this._currentModal.close();
    this.router.navigateByUrl('profile')
  }

  protected get canLogin(): boolean {
    return (this._userInputInfo.email != "" && this._userInputInfo.password != "");
  }

  protected changeRegistrationStateTo(state: RegistrationStates) {
    this._currentRegistrationState = state;
  }

}


enum RegistrationStates{LOGIN, REGISTER}
