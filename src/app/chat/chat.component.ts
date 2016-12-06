import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  private _chatIsShown:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  protected toggleChatVisibility()
  {
    this._chatIsShown = !this._chatIsShown;
  }

}
