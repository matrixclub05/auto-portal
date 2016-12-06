import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationFlowComponent } from './registrationFlow/registration-flow.component'
import {NgbModule, NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule, NgbModule, FormsModule
  ],
  declarations: [RegistrationFlowComponent],
  entryComponents: [RegistrationFlowComponent]
})
export class RegistrationModule
{
  constructor()
  {
  }
}
