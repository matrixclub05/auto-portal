import { Injectable } from '@angular/core';
import {Message} from "./data-objects/Message";

@Injectable()
export class MessageCollectorService {

  private _messages:Array<Message> = [];

  constructor()
  {

  }

  public addMessageCollection(messageArray:Array<Message>)
  {
    this._messages.concat(messageArray);
  }

  public addMessage(message:Message)
  {
    this._messages.push(message);
  }

  public get allMessages():Array<Message>
  {
    return this._messages;
  }

  public deleteMessage(message:Message)
  {
    var index = this._messages.indexOf(message);
    if(index > -1)
    {
      this._messages.splice(index, 1);
    }
  }
}
