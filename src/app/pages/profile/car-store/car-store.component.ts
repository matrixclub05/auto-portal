import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-store',
  templateUrl: './car-store.component.html',
  styleUrls: ['./car-store.component.scss']
})
export class CarStoreComponent implements OnInit {

  private _isServiceChatCollapsed:boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
