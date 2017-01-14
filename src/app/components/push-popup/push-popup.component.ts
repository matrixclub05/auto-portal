import { Component, OnInit } from '@angular/core';
import {Message, User} from "../../global-services/data-objects/Message";
import {MessageCollectorService} from "../../global-services/message-collector.service";
import {Router} from "@angular/router";

@Component({
  selector: 'push-popup',
  templateUrl: './push-popup.component.html',
  styleUrls: ['./push-popup.component.scss']
})
export class PushPopupComponent implements OnInit {

  private _messageHardCode:Array<Message> = [];
  private _currentMessage:Message = null;

  constructor(private _messageCollector:MessageCollectorService, private router: Router) { }

  ngOnInit()
  {
    setInterval(()=>{
      this.showPopup();
      setTimeout(()=>{
        this._currentMessage = null;
      },4 * 1000)
    }, 60 * 1000);

    this.createHardCodeMessages();
  }

  private showPopup()
  {
    this._currentMessage = this.getFirstHardCodeMessage();
    if(this._currentMessage)
    {
      this._messageCollector.addMessage(this._currentMessage);
    }
  }



  private getFirstHardCodeMessage():Message
  {
    if(this._messageHardCode.length > 0)
    {
      let lastMessage:Message = this._messageHardCode.shift();
      return lastMessage;
    }
    return null;
  }

  private goToMessages()
  {
    this.router.navigateByUrl('/profile/messages');
  }


  private createHardCodeMessages()
  {
    var date = new Date().toLocaleDateString();
    this._messageHardCode.push(new Message({
      sentDate: date,
      subject: 'ТО завершено',
      description: 'Ваш автомобиль готов, произведена замена ремня ГРМ, тормозных колодок и топливного фильтра',
      isSent: 'boolean',
      isExpanded: true,
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

    let user = new User({
      phoneNumber: '+123456789',
      email: 'email@e.com'
    });

    this._messageHardCode.push(new Message({
      sentDate: date,
      subject: 'Куплю/обменяю авто',
      description: 'Куплю ваше авто за 3000$ или обменяю на BMW 325 1995г',
      isSent: 'boolean',
      isExpanded: true,
      sender: user,
    }));

    this._messageHardCode.push(new Message({
      sentDate: date,
      subject: 'Обменяю ваш автомобиль',
      description: 'Предлагаю обмен на Honda Accord 2005 г. в Актау с Вашей доплатой (400$)',
      isSent: 'boolean',
      isExpanded: true,
      sender: user,
    }));

    this._messageHardCode.push(new Message({
      sentDate: date,
      subject: 'Обменяю на трактор',
      description: 'Предлагаю обменять ваш автомобиль на трактор МТЗ, не бит, не крашен, в ДТП не бывал, гаражное хранение',
      isSent: 'boolean',
      isExpanded: true,
      sender: user,
    }));
  }
}
