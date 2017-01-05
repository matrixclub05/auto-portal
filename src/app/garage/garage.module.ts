import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {GarageDataService} from "./services/garage-data.service";
import {GarageComponent} from "./moduleView/garage.component";
import {SignUpForServiceComponent} from "./sign-up-for-service/sign-up-for-service.component";
import {TooMuchTimeWOServiceComponent} from "./garage-single-car/too-much-time-woservice/too-much-time-woservice.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TooMuchTimeWOServiceComponent],
  providers: [GarageDataService],
  entryComponents: [GarageComponent, SignUpForServiceComponent, TooMuchTimeWOServiceComponent]
})
export class GarageModule { }
