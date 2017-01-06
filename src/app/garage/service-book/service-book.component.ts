import {Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import {ServiceRow} from "../services/garage-data.service";
import {NativeWindowTools} from "../../global-services/NativeWindowTools";
import {Service} from "../draftData/Service";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: '[service-book]',
  templateUrl: './service-book.component.html',
  styleUrls: ['./service-book.component.scss']
})
export class ServiceBookComponent implements OnInit, AfterViewInit {

  @ViewChild('content') content:ElementRef;
  @Input() carServiceBook:Array<ServiceRow>;
  @Output() goBack = new EventEmitter<boolean>();

  private modalMode:boolean = false;

  private _modalRef;

  private _techServiceArray:Array<string> = ["(15000 км)/ 12 месяцев", "(30000 км)/ 24 месяца", "(45000 км)/ 36 месяцев", "(60000 км)/ 48 месяцев", "(75000 км)/ 60 месяцев"];

  constructor(private _windowTools:NativeWindowTools) { }

  ngOnInit() {
    this._techServiceArray.length = this.getRandomInt(1, this._techServiceArray.length - 1);
    if(!this.carServiceBook)
    {
      this.carServiceBook = Service.data;
      this.modalMode = true;
    }
  }

  ngAfterViewInit()
  {
    if(!this._windowTools.isElementInViewPort(this.content))
    {
      this._windowTools.scrollToElement(this.content, true);
    }
  }

  protected backButtonHit()
  {
    this.goBack.emit(true);
  }

  protected close()
  {
    this._modalRef.close();
  }

  public set modalRef(modalRef)
  {
    this._modalRef = modalRef;
  }

  protected getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
