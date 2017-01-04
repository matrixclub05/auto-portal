import { Component } from '@angular/core';
import {DBServiceService} from "./global-services/dbservice.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';

  constructor(_dbService:DBServiceService)
  {

  }
}
