import {Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';
import {ServiceRow} from "../services/garage-data.service";
import {NativeWindowTools} from "../../global-services/NativeWindowTools";

@Component({
  selector: '[service-book]',
  templateUrl: './service-book.component.html',
  styleUrls: ['./service-book.component.scss']
})
export class ServiceBookComponent implements OnInit {

  @ViewChild('content') content:ElementRef;
  @Input() carServiceBook:Array<ServiceRow>;
  @Output() goBack = new EventEmitter<boolean>();

  constructor(private _windowTools:NativeWindowTools) { }

  ngOnInit() {
    if(!this._windowTools.isElementInViewPort(this.content))
    {
        this._windowTools.scrollToElement(this.content, true);
    }
  }

  protected backButtonHit()
  {
    this.goBack.emit(true);
  }
}
