import { Component, Input } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {Message} from "../../global-services/data-objects/Message";

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.scss']
})
export class MessageFormComponent{
  @Input() message: Message;

  constructor(public activeModal: NgbActiveModal) {}


}
