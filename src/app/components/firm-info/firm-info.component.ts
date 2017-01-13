import { Component, Input } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-firm-info',
  templateUrl: './firm-info.component.html',
  styleUrls: ['./firm-info.component.scss']
})
export class FirmInfoComponent {
  @Input() firm: any;
  constructor(public activeModal: NgbActiveModal) {}

}
