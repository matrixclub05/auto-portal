import { Component, OnInit } from '@angular/core';
import {Message, User} from "../../global-services/data-objects/Message";

@Component({
  selector: 'push-popup',
  templateUrl: './push-popup.component.html',
  styleUrls: ['./push-popup.component.scss']
})
export class PushPopupComponent implements OnInit {

  private _hardCodedMessage:Array<Message> = [];

  private _currentMessage:Message = null;

  constructor() { }

  ngOnInit()
  {
    setTimeout(()=>{
      this.showPopup();
      setTimeout(()=>{
        this._currentMessage = null;
      },4000)
    }, 1000)
  }

  private showPopup()
  {
    var date = new Date().toLocaleDateString();
    this._currentMessage = new Message({
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
      });
  }

}
