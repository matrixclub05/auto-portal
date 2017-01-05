import {Component, OnInit, Input, EventEmitter, Output} from "@angular/core";
import {Ad} from "../../global-services/data-objects/Ad";
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {MarketServiceBookComponent} from "./market-service-book/market-service-book.component";
import {PhotoMemoryService} from "../../global-services/photo-memory.service";
import {CreditCalcComponent} from "../credit-calc/credit-calc.component";

@Component({
  selector: 'app-market-car',
  templateUrl: './market-car.component.html',
  styleUrls: ['./market-car.component.scss'],
  entryComponents: [MarketServiceBookComponent]
})
export class MarketCarComponent implements OnInit {
  @Input() _showCalcLink = true;
  @Input() _car: Ad;
  @Output() onSelected = new EventEmitter<Ad>();

  constructor(private _modalService: NgbModal, private _photoMemory:PhotoMemoryService) {

  }

  ngOnInit() {

  }

  protected openServiceBook() {
    const modalRef: NgbModalRef = this._modalService.open(MarketServiceBookComponent, {
      size: 'lg',
      windowClass: 'car-market-car-details'
    });
    modalRef.componentInstance.modalRef = modalRef;
    modalRef.componentInstance.car = this._car;
  }

  protected openCarCredit()
  {
    const modalRef = this._modalService.open(CreditCalcComponent,  {
      size: 'lg',
      windowClass: 'car-market-car-details'
    });
    modalRef.componentInstance.car = this._car;
  }

}
