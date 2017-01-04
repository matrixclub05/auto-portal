import {Component, OnInit, Input, EventEmitter, Output} from "@angular/core";
import {CarData} from "../../global-services/data-objects/CarData";
import {DBServiceService} from "../../global-services/dbservice.service";
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {TooMuchTimeWOServiceComponent} from "./too-much-time-woservice/too-much-time-woservice.component";

@Component({
  selector: '[app-garage-single-car]',
  templateUrl: 'garage-single-car.component.html',
  styleUrls: ['garage-single-car.component.scss']
})
export class GarageSingleCarComponent implements OnInit {

  @Input() _car:CarData;
  @Output() onSelected = new EventEmitter<CarData>();
  private _isTooMuchTimeWOServiceShown:boolean = false;

  constructor(private _databaseService:DBServiceService, private _modalService:NgbModal) { }

  ngOnInit() {
  }

  protected select(car:CarData)
  {
    this.onSelected.emit(this._car);
  }

  public addToMarket()
  {
    if(this._isTooMuchTimeWOServiceShown)
    {
      this._databaseService.addFakeCarFromGarage(this._car.manufacturer,this._car.model,this._car.year);
    }
    else
    {
      const modalRef:NgbModalRef = this._modalService.open(TooMuchTimeWOServiceComponent);
      modalRef.componentInstance.modalRef = modalRef;
      modalRef.componentInstance.car = this._car;
      this._isTooMuchTimeWOServiceShown = true;
    }
  }

}
