import {Component, OnInit, ViewChild} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'baner',
  templateUrl: './baner.component.html',
  styleUrls: ['./baner.component.scss']
})
export class BanerComponent implements OnInit {

  @ViewChild('content') content;
  private _banerVisible:boolean = true;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
    this.open(this.content);
  }

  open(content) {
    this.modalService.open(content, {size:'lg'}).result.then((result) => {

    }, (reason) => {

    });
  }

  protected showBaner()
  {
    this._banerVisible = true;
  }

  protected hideBaner()
  {
    this._banerVisible = false;
  }
}
