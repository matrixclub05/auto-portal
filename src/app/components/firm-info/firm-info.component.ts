import { Component, Input } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {User} from "../../global-services/data-objects/Message";

@Component({
  selector: 'app-firm-info',
  templateUrl: './firm-info.component.html',
  styleUrls: ['./firm-info.component.scss']
})
export class FirmInfoComponent {
  @Input() user: any;
  constructor(public activeModal: NgbActiveModal) {}

}
