import { Component, OnInit } from '@angular/core';
import {NgbModalRef, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {RegistrationFlowComponent} from "../registrationFlow/registration-flow.component";

@Component({
  selector: 'app-ask-to-register-baner',
  templateUrl: 'ask-to-register-baner.component.html',
  styleUrls: ['ask-to-register-baner.component.scss']
})
export class AskToRegisterBanerComponent implements OnInit {

  public modalInstance:NgbModalRef = null;

  constructor(private _modalService: NgbModal) { }

  ngOnInit() {
  }

  protected closeAndGoToRegistration()
  {
    this.openRegistration(false);
    this.close();
  }

  protected closeAndLogin()
  {
    this.openRegistration(true);
    this.close();
  }

  protected openRegistration(isLoginMode:boolean)
  {
    let v = this._modalService.open(RegistrationFlowComponent);
    v.componentInstance.isLogin = isLoginMode;
  }

  protected close()
  {
    if(this.modalInstance)
    {
      this.modalInstance.close();
    }
  }
}
