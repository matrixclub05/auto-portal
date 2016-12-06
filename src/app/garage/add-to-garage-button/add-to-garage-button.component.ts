import { Component, OnInit } from '@angular/core';
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {GarageComponent} from "../moduleView/garage.component";

@Component({
  selector: '[add-to-garage-button]',
  templateUrl: './add-to-garage-button.component.html',
  styleUrls: ['./add-to-garage-button.component.scss']
})
export class AddToGarageButtonComponent implements OnInit {

  constructor(private _modalService: NgbModal) { }

  ngOnInit() {
  }

  protected openAddCar()
  {
    const modalRef:NgbModalRef = this._modalService.open(GarageComponent, {size:'lg', windowClass: 'add-to-garage'});
    modalRef.componentInstance.modalRef = modalRef;
  }
}
