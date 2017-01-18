import {Injectable} from '@angular/core';
import {Message} from "./data-objects/Message";

@Injectable()
export class MessageCollectorService {

  private _messages: Array<Message> = [];
  public urgentMessage: Message;

  constructor() {

  }

  public showMessage(message: Message, car: any, date: any, time: any) {

    this.urgentMessage = new Message({
      subject: message.subject,
      description: `Ваша заявка на сервис принята, ждем Вас в Автосервисе ${date.day}.${date.month}.${date.year} числа в ${time.hour}:${time.minute}  `,
      sender: message.recipient,
      recipient: message.sender
    });
    this.addMessage(message);
  }

  public deleteAll(): void {
    this._messages = [];
  }

  public addMessageCollection(messageArray: Array<Message>) {
    this._messages.concat(messageArray);
  }

  public addMessage(message: Message) {
    this._messages.push(message);
  }

  public get allMessages(): Array<Message> {
    return this._messages;
  }

  public deleteMessage(message: Message) {
    var index = this._messages.indexOf(message);
    if (index > -1) {
      this._messages.splice(index, 1);
    }
  }
}
