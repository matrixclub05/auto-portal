import {Component, Input} from '@angular/core';
import {Message} from "../../global-services/data-objects/Message";
import {NgbActiveModal, NgbDateStruct, NgbTimeStruct} from "@ng-bootstrap/ng-bootstrap";
import {MessageCollectorService} from "../../global-services/message-collector.service";
const now = new Date();
@Component({
  selector: 'app-sign-up-service',
  templateUrl: './sign-up-service.component.html',
  styleUrls: ['./sign-up-service.component.scss']
})
export class SignUpServiceComponent {
  @Input() message: Message;
  @Input() car: any;

  now = new Date();
  photos: any = [];
  time: NgbTimeStruct;
  model: NgbDateStruct = {year: this.now.getFullYear(), month: this.now.getMonth() + 1, day: this.now.getDate()+1};

  constructor(public activeModal: NgbActiveModal, public pushService: MessageCollectorService) {
    this.time = {hour: this.getRandomInt(9, 17), minute: this.getRandomInt(0, 60), second: 0}
  }

  protected getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  selectToday() {
    this.model = {year: this.now.getFullYear(), month: this.now.getMonth() + 1, day: this.now.getDate()};
  }
  signUp(){
    this.activeModal.close();
    this.pushService.showMessage(this.message, this.car, this.model, this.time);

  }
  addCarImage(file: any) {
    var fileReader = new FileReader();
    fileReader.onload = function(event) {
      this.photos.push(event.target.result);
    }.bind(this);
    fileReader.readAsDataURL(file);

  }

  capturePhoto($event) {
    if ($event.target.files.length > 0) {
      var file = $event.target.files[0];
      this.addCarImage(file);
    }
  }
}
