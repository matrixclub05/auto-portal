import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GarageDataService} from "./services/garage-data.service";
import {GarageComponent} from "./moduleView/garage.component";
import {SignUpForServiceComponent} from "./sign-up-for-service/sign-up-for-service.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [GarageDataService],
  entryComponents: [GarageComponent, SignUpForServiceComponent]
})
export class GarageModule { }
