import {Component, OnInit, Input, EventEmitter, Output} from "@angular/core";
import {Ad} from "../../global-services/data-objects/Ad";
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {MarketServiceBookComponent} from "./market-service-book/market-service-book.component";
import {PhotoMemoryService} from "../../global-services/photo-memory.service";
import {CreditCalcComponent} from "../credit-calc/credit-calc.component";
import {ServiceBookComponent} from "../../garage/service-book/service-book.component";
import {UserNavigationHistoryService} from "../../global-services/user-navigation-history.service";

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
  private owner: any;

  constructor(private _modalService: NgbModal, private _photoMemory:PhotoMemoryService, private _userNavigation:UserNavigationHistoryService) {

  }

  ngOnInit() {
    this.owner = JSON.parse(this._car.ownerData);
  }

  protected openServiceBook(e)
  {
    e.stopPropagation();
    const modalRef: NgbModalRef = this._modalService.open(ServiceBookComponent, {
      size: 'lg',
      windowClass: 'car-market-car-details'
    });
    modalRef.componentInstance.modalRef = modalRef;
    this._userNavigation.trackAction("СЕРВИСНАЯ КНИГА " + this._car.carName + " " + this._car.engineType)
  }

  protected openCarDetails(e) {
    e.stopPropagation();
    const modalRef: NgbModalRef = this._modalService.open(MarketServiceBookComponent, {
      size: 'lg',
      windowClass: 'car-market-car-details'
    });
    modalRef.componentInstance.modalRef = modalRef;
    modalRef.componentInstance.car = this._car;

    this._userNavigation.trackAction("ДЕТАЛИ АВТО " + this._car.carName + " " + this._car.engineType)
  }

  protected openCarCredit(e)
  {
    e.stopPropagation();
    const modalRef = this._modalService.open(CreditCalcComponent,  {
      size: 'lg',
      windowClass: 'car-market-car-details'
    });
    modalRef.componentInstance.car = this._car;
    modalRef.componentInstance.modalRef = modalRef;
    this._userNavigation.trackAction("РАСЧЕТ КРЕДИТА " + this._car.carName + " " + this._car.engineType)
  }

}
