import {Component, OnInit, ViewChild, ElementRef, Input} from '@angular/core';

@Component({
  selector: 'chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  @ViewChild('panelBody') panelBody:ElementRef;

  @Input() isGlobalChat:boolean = true;

  private _currentMessage:string = "";

  private _predefinedMessages:Array<string> = [];

  private _messages:Array<IMessage> = [];


  private _chatIsShown:boolean = !this.isGlobalChat;

  constructor() { }

  ngOnInit() {
    if(this.isGlobalChat)
    {
      this._predefinedMessages = [
        "чем можем помочь?",
        "вы можете записаться на тест драйв нажав в салон-магазине на кнопку прокатиться",
        "зарегистрируйтесь и получите скидочный купон на любую услугу",
        "ваши машины доступны в меню гараж",
        "размер и количество кредитных платежей вы можете расчитать в кредитном калькуляторе"
      ];
    }
    else
    {
      this._chatIsShown = true;

      this._messages.push({type:"out", message: "Здравствуйте, Вас приветствует сервисный отдел. Я мастер приемщик Андрей, чем можем вам помочь?", isPhoto:false});

      this._predefinedMessages = [
        "Пожалуйста, опишите вашу проблему",
        "Для того что бы оценить проблему, пожалуйста, сделайте фотографию повреждения. Для этого нажмите кнопку с избражением фотоаппарата",
        "Для оценки повреждений, пожалуйста, сделайте фотографию. Для этого нажмите кнопку с избражением фотоаппарата",
        "Пожалуйста сфотографируйте поврежденный места. Для этого нажмите кнопку с избражением фотоаппарата"
      ];
    }
  }

  private updateChatScroll(){
    if(this.panelBody)
    {
      var element =this.panelBody.nativeElement;
      element.scrollTop = element.scrollHeight;
    }
  }

  protected sendMessage()
  {
    if(this._currentMessage != '')
    {
      let msgs = this._messages;
      let predef = this._predefinedMessages;
      if(this._currentMessage.length > 0)
      {
        this._messages.push({type:"in", message:this._currentMessage, isPhoto:false});
        setTimeout(this.updateChatScroll.bind(this), 300);
      }

      this._currentMessage = "";

      setTimeout(function(){
        msgs.push({type:"out", message:predef[Math.floor(Math.random()*predef.length)], isPhoto:false});
        setTimeout(this.updateChatScroll.bind(this), 300);
      }.bind(this), 1000);
    }
  }

  protected toggleChatVisibility()
  {
    this._chatIsShown = !this._chatIsShown;
    if(this._chatIsShown && this._messages.length == 0)
    {
      setTimeout(this.updateChatScroll.bind(this), 300);
      this._messages.push({type:"out",message:"Здравствуйте меня зовут Робот я помогу вам", isPhoto:false});
    }
  }

  protected capturePhoto($event){
    if($event.target.files.length > 0)
    {
      var file = $event.target.files[0];
      var fileReader = new FileReader();
      fileReader.onload = function(event){
        this._messages.push({type:"in", message:event.target.result,isPhoto:true});
      }.bind(this);
      fileReader.readAsDataURL(file);
    }
  }

}


interface IMessage
{
  type:string
  message:string;
  isPhoto:boolean;
}


