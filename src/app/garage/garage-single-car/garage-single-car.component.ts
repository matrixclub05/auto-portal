import {Component, OnInit, Input, EventEmitter, Output, ViewChild, AfterViewInit} from "@angular/core";
import {CarData} from "../../global-services/data-objects/CarData";
import {DBServiceService} from "../../global-services/dbservice.service";
import {PhotoMemoryService} from "../../global-services/photo-memory.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {SignUpServiceComponent} from "../../components/sign-up-service/sign-up-service.component";
import {LoginServiceService} from "../../global-services/login-service.service";
import {Message, User} from "../../global-services/data-objects/Message";
import {MessageCollectorService} from "../../global-services/message-collector.service";

@Component({
  selector: '[app-garage-single-car]',
  templateUrl: 'garage-single-car.component.html',
  styleUrls: ['garage-single-car.component.scss', '../../components/market-car/market-car.component.scss'],
})
export class GarageSingleCarComponent implements OnInit {

  @Input() _car:CarData;
  @Output() onSelected = new EventEmitter<CarData>();
  @ViewChild('carImage') carImage;

  constructor(private _databaseService:DBServiceService, private _garageMemo:PhotoMemoryService, private modalService: NgbModal, public loginService: LoginServiceService, private messagesService: MessageCollectorService) { }

  ngOnInit() {
  }

  protected select(car:CarData)
  {
    this.onSelected.emit(this._car);
  }

  public addToMarket(e)
  {
    e.stopPropagation();
    this._databaseService.addFakeCarFromGarage(this._car.manufacturer,this._car.model,this._car.year, this._car.vinNumber);
    this.showMessage();

  }
  public showMessage() {

    this.messagesService.urgentMessage = new Message({
      subject: "Автобазар",
      description: `${this._car.manufacturer} ${this._car.model} была добавлена на рынок `,
      sender: new User({
        firstName: "Автобазар",
        lastName: ""
      }),
      recipient: this.loginService.getCurrentUser()
    });
    this.messagesService.addMessage(this.messagesService.urgentMessage);
  }

  protected capturePhoto($event)
  {
    $event.stopPropagation();
    if($event.target.files.length > 0)
    {
      var file = $event.target.files[0];
      this._garageMemo.addCarImage(this._car, file);
    }
  }
  private onPhotoClick(e){
    e.stopPropagation();
  }
  private signUpService(e){
    e.stopPropagation();
    const modalRef = this.modalService.open(SignUpServiceComponent);
    modalRef.componentInstance.car = this._car;
    modalRef.componentInstance.message = new Message({
      sentDate: new Date().toLocaleDateString(),
      description: '',
      subject: 'Запись на сервис',
      recipient: new User({
        fullName: 'Автосервис Усть-Каменогорск',
        firstName: 'Автосервис',
        lastName: 'Усть-Каменогорск',
        email: 'auto-service@bipek.kz',
        phoneNumber: '+77232522525',
        location: {name: 'Автосервис',city: 'Усть-Каменогорск', street: 'просп. Независимости', buildingNumber: '92/1'}
      }),
      sender: this.loginService.getCurrentUser()
    });
  }
}
