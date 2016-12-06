import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationFlowComponent } from './registrationFlow/registration-flow.component'
import {NgbModule, NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule} from "@angular/forms";
import {AskToRegisterBanerComponent} from "./ask-to-register-baner/ask-to-register-baner.component";

@NgModule({
  imports: [
    CommonModule, NgbModule, FormsModule
  ],
  declarations: [RegistrationFlowComponent, AskToRegisterBanerComponent],
  entryComponents: [RegistrationFlowComponent, AskToRegisterBanerComponent]
})
export class RegistrationModule
{
  constructor()
  {
  }
}
