import { Component, OnInit } from '@angular/core';
import {RegistrationFlowComponent} from "../registrationFlow/registration-flow.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap"

@Component({
  selector: '[app-registration]',
  templateUrl: 'registration.component.html',
  styleUrls: ['registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(private _modalService:NgbModal) { }

  ngOnInit() {
  }

  public openRegistrationModal()
  {
    this._modalService.open(RegistrationFlowComponent);
  }
}
