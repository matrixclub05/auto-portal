import {Component, OnInit} from '@angular/core';
import {Message, User} from "../../global-services/data-objects/Message";
import {MessageCollectorService} from "../../global-services/message-collector.service";
import {Router} from "@angular/router";
import {LoginServiceService} from "../../global-services/login-service.service";
import {setTimeout} from "timers";
const minute = 60 * 1000;
@Component({
  selector: 'push-popup',
  templateUrl: './push-popup.component.html',
  styleUrls: ['./push-popup.component.scss']
})
export class PushPopupComponent implements OnInit {

  private _messageHardCode: Array<Message> = [];
  private _currentMessage: Message = null;
  private isUrgentShowed: boolean = false;

  constructor(private _messageCollector: MessageCollectorService, private router: Router, private loginService: LoginServiceService) {
    this.createHardCodeMessages();

  }

  private rule: Array<number> = [15 * 1000, minute, 2*minute, 2*minute];

  ngOnInit() {
    setInterval(()=>{
      if(this._messageCollector.urgentMessage){
        this._currentMessage = this._messageCollector.urgentMessage;
        setTimeout(()=>{
          this._currentMessage = null;
          this._messageCollector.urgentMessage = null;
        }, 6000);
      }
    }, 233);
    this.activateStream();
    setTimeout(()=>{
      setInterval(this.activateStream, 8*minute);
    }, 8*minute);



    /*setInterval(()=> {
      if(this._currentMessage == null ) {
        i++;
        if(i>len){
          i = 0;
        }
      }else {
        return;
      }


      if (this.loginService.isLoggedIn) {
        setTimeout(()=>{

          this.showPopup();

        }, this.showRule[i]);


      }

    }, 200);*/


  }

  closePopup(e) {
    e.stopPropagation();
    this._currentMessage = null;
  }
  activateStream():void {
    var len = this.rule.length-1;
    var i = 0;
    var messegaes = this._messageHardCode;
    messegaes.map((message, i)=>{
      setTimeout(()=>{
        this._currentMessage = message;
        this._messageCollector.addMessage(this._currentMessage);
        setTimeout(()=>{
          this._currentMessage = null;

        }, 6000)
      }, this.rule[i]);
    });
  }
  protected getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  private showPopup() {
    if (this.isUrgentShowed) {
      this._messageCollector.urgentMessage = null;
    }
    if (this._messageCollector.urgentMessage) {
      this._currentMessage = this._messageCollector.urgentMessage;
      this.isUrgentShowed = true;
    } else {
      this._currentMessage = this.getFirstHardCodeMessage();
      if (this._currentMessage) {
        this._messageCollector.addMessage(this._currentMessage);
      }
    }

    setTimeout(()=> {
      this._currentMessage = null;
    }, 6000);

  }


  private getFirstHardCodeMessage(): Message {

    var rndIdx = this.getRandomInt(0, this._messageHardCode.length - 1);
    return this._messageHardCode[rndIdx];

    /*if(this._messageHardCode.length > 0)
     {
     let lastMessage:Message = this._messageHardCode.shift();
     return this._messageHardCode[rndIdx]; //lastMessage;
     }
     return null;*/
  }

  private goToMessages() {
    this.router.navigateByUrl('/profile/messages');
  }


  private createHardCodeMessages() {
    var date = new Date().toLocaleDateString();
    this._messageHardCode.push(new Message({
      sentDate: date,
      subject: 'ТО завершено',
      description: 'Ваш автомобиль готов, произведена замена ремня ГРМ, тормозных колодок и топливного фильтра',
      isSent: 'boolean',
      isExpanded: false,
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
      isExpanded: false,
      sender: user,
    }));

    this._messageHardCode.push(new Message({
      sentDate: date,
      subject: 'Обменяю ваш автомобиль',
      description: 'Предлагаю обмен на Honda Accord 2005 г. в Актау с Вашей доплатой (400$)',
      isSent: 'boolean',
      isExpanded: false,
      sender: user,
    }));

    this._messageHardCode.push(new Message({
      sentDate: date,
      subject: 'Обменяю на трактор',
      description: 'Предлагаю обменять ваш автомобиль на трактор МТЗ, не бит, не крашен, в ДТП не бывал, гаражное хранение',
      isSent: 'boolean',
      isExpanded: false,
      sender: user,
    }));
  }
}
