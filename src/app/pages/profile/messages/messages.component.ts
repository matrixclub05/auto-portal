import {Component, OnInit} from '@angular/core';
import {Message, User} from "../../../global-services/data-objects/Message";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {UserInfoComponent} from "../../../components/user-info/user-info.component";
import {FirmInfoComponent} from "../../../components/firm-info/firm-info.component";
import {MessageFormComponent} from "../../../components/message-form/message-form.component";
import {LoginServiceService} from "../../../global-services/login-service.service";
import {MessageCollectorService} from "../../../global-services/message-collector.service";



@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent implements OnInit {

  private activeMessage: any;

  constructor(private modalService: NgbModal, private _messageCollector:MessageCollectorService, public loginService: LoginServiceService) {
    let date = new Date().toLocaleDateString();
    let user = new User({
      phoneNumber: '+123456789',
      email: 'email@e.com'
    });

    this._messageCollector.addMessage(new Message({
      sentDate: date,
      subject: 'Замена масла',
      description: 'Описание сообщения',
      isSent: 'boolean',
      sender: new User({
        fullName: 'Михаил Иванов',
        phoneNumber: '+123456789',
        email: 'email@e.com',
        workPlace: {
          name: "Авто-сервис",
          phoneNumber: '123456789',
          photo: 'assets/firm/local_auto.jpg',
          loacation: {
            city: "Астана",
            street: "Кенесары көшесі",
            buildingNumber: "79/1"
          }
        }
      })
    }));
    this._messageCollector.addMessage(new Message({

      sentDate: date,
      subject: 'Акт выполненых работ',
      description: 'Ждем вас на сервисе для подписания документов.',
      isSent: 'boolean',
      sender: new User({
        fullName: 'Игорь Неизвестный',
        phoneNumber: '+123456789',
        email: 'email@e.com',
        position: "Менеджер по продажам",
        workPlace: {
          name: "Авто-сервис",
          phoneNumber: '123456789',
          photo: 'assets/firm/local_auto.jpg',
          loacation: {
            city: "Астана",
            street: "Кенесары көшесі",
            buildingNumber: "79/1"
          }
        }
      }),
    }));
    this._messageCollector.addMessage(new Message({
      sentDate: date,
      subject: 'Куплю/обменяю авто',
      description: 'Куплю ваше авто за 3000$ или обменяю на BMW 325 1995г',
      isSent: 'boolean',
      sender: user,
    }));

    this.activeMessage = this._messageCollector.allMessages[0];
    this.activeMessage.setRead(true);
  }

  ngOnInit() {}

  showMessage(message: Message, e: any){
    if(e){
      e.stopPropagation();
    }
    message.isExpanded = !message.isExpanded;
  }

  showWorkplaceInfo(workplace: any){
    const modalRef = this.modalService.open(FirmInfoComponent);
    modalRef.componentInstance.firm = workplace;
  }
  showUserInfo(user: User){

    const modalRef = this.modalService.open(UserInfoComponent);
    modalRef.componentInstance.user = user;
  }
  showInfo(sender: User, e:any){
    e.stopPropagation();
    if(sender.workPlace){
      this.showWorkplaceInfo(sender.workPlace);
    }else {
      this.showUserInfo(sender);
    }

  }
  deleteMessage(message: Message, e:any){
    if(e){
      e.stopPropagation();
    }

    this._messageCollector.deleteMessage(message);

    let msgs = this._messageCollector.allMessages;

    if(msgs.length > 0){
      this.activeMessage = msgs[0];
    }else{
      this.activeMessage = null;
    }

  }

  messageClick(message: Message){
    this.activeMessage = message;
    message.setRead(true);
  }
  deleteAllMessages(){
   // this.messages = [];
  }
  newMessage(message: Message){

    var mess;
    const modalRef = this.modalService.open(MessageFormComponent);

    if(message){
      //noinspection TypeScriptUnresolvedFunction
      mess = new Message(message);
      mess.isNew = true;
      mess.recipient = message.sender;
      mess.sender = this.loginService.getCurrentUser();

    }

    modalRef.componentInstance.message = mess || new Message({
      isNew: true
    });
  }

}
