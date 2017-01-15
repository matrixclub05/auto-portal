import {Component, OnInit} from '@angular/core';
import {Ad} from "../../global-services/data-objects/Ad";
import {NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
class Thing {
  public zadoljnost: string = "";
  public na4islProcenti: string = "";
  public osnovnoiDolg: string = "";
  public sumPlatej: string = "";
}

@Component({
  selector: '[app-credit-calc]',
  templateUrl: './credit-calc.component.html',
  styleUrls: ['./credit-calc.component.scss']
})
export class CreditCalcComponent implements OnInit {
  private _car:Ad = null;

  private sumCredit: number = 10000;
  private timeCredit: number = 12;
  private percentRateCredit: number = 20;

  private errors = {};
  private results: Array<Thing> = [];
  private sumNa4islProcenti: number = 0;
  private sumSumPlatej: number = 0;
  private sumSumCredit: number = 0;
  private totalSum: number = 0;

  private _modalRef:NgbModalRef = null;

  private bill:number = 0;

  private calc (){
    //noinspection TypeScriptUnresolvedFunction
    var percentRateCredit = parseInt(this.percentRateCredit);
    //noinspection TypeScriptUnresolvedFunction
    var sumCredit = parseInt(this.sumCredit);
    //noinspection TypeScriptUnresolvedFunction
    var timeCredit = parseInt(this.timeCredit);


    var percent = percentRateCredit / 100 / 12, div;
    if(percent == 0 ){
      return this.myRound(sumCredit/timeCredit);
    }

    div =  1 - Math.pow( ( 1 + percent ), -timeCredit);

    return this.myRound((sumCredit * (percent / div)));
  }

  private action() {
      this.results = [];
      let zadoljnost = +this.sumCredit;
      let timeCredit = +this.timeCredit;
      let percentRateCredit = +this.percentRateCredit;

    this.sumNa4islProcenti = 0;
      this.sumSumPlatej = 0;
      this.sumSumCredit = +this.sumCredit;

      let osnovnoiDolg:number = this.myRound(zadoljnost / timeCredit);

      let na4islProcenti:number = 0;
      let sumPlatej:number = 0;

      for (let i = 1; i <= timeCredit; i++) {
        na4islProcenti = this.myRound((zadoljnost / 100) * (percentRateCredit / 12));
        sumPlatej = osnovnoiDolg + na4islProcenti;

        let obj = <Thing>{
          zadoljnost: zadoljnost.toLocaleString(),
          na4islProcenti: na4islProcenti.toLocaleString(),
          osnovnoiDolg: osnovnoiDolg.toLocaleString(),
          sumPlatej: sumPlatej.toLocaleString()
        };
        this.results.push(obj);

        zadoljnost -= this.myRound(osnovnoiDolg);

        this.sumNa4islProcenti += na4islProcenti;
        this.sumSumPlatej += sumPlatej;
      }

  };

  set car(value: Ad) {
    this._car = value;
    this.sumCredit = parseInt(<any>this._car.price);
  }

  private myRound(num) {
    return (Math.round(num * 100) / 100);
  };

  constructor() {
  }

  public set modalRef(modalRef:NgbModalRef)
  {
    this._modalRef = modalRef;
  }


  ngOnInit() {
  }

}
