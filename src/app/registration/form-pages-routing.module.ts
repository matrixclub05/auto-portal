import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {RegistrationComponent} from "./moduleView/registration.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: RegistrationComponent }
    ])
  ],
  exports: [RouterModule]
})
export class RegistrationRoutingModule { }
