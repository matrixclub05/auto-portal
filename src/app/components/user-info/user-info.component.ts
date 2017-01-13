import { Component, Input } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {User} from "../../global-services/data-objects/Message";
@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent {

  @Input() user: User;

  constructor(public activeModal: NgbActiveModal) {}


}
