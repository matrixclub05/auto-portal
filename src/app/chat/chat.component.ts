import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  @ViewChild('panelBody') panelBody:ElementRef;

  private _currentMessage:string = "";

  private _predefinedMessages:Array<string> = [
    "чем можем помочь?",
    "вы можете записаться на тест драйв нажав в салон-магазине на кнопку прокатиться",
    "зарегистрируйтесь и получите скидочный купон на любую услугу",
    "ваши машины доступны в меню гараж",
    "размер и количество кредитных платежей вы можете расчитать в кредитном калькуляторе"
  ];

  private _messages:Array<IMessage> = [];


  private _chatIsShown:boolean = false;

  constructor() { }

  ngOnInit() {

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
    let msgs = this._messages;
    let predef = this._predefinedMessages;
    if(this._currentMessage.length > 0)
    {
      this._messages.push({type:"in", message:this._currentMessage});
    }

    this._currentMessage = "";

    setTimeout(function(){
      msgs.push({type:"out", message:predef[Math.floor(Math.random()*predef.length)]})
    }, 1000);
  }

  protected toggleChatVisibility()
  {
    this._chatIsShown = !this._chatIsShown;
    if(this._chatIsShown && this._messages.length == 0)
    {
      setInterval(this.updateChatScroll.bind(this), 300);
      this._messages.push({type:"out",message:"Здравствуйте меня зовут Робот я помогу вам"});
    }
  }

}


interface IMessage
{
  type:string
  message:string;
}


