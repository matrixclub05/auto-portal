import {Component, OnInit} from '@angular/core';
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


  private sumCredit: number = 1000;
  private timeCredit: number = 12;
  private percentRateCredit: number = 20;

  private errors = {};
  private results: Array<Thing> = [];
  private sumNa4islProcenti: number = 0;
  private sumSumPlatej: number = 0;
  private sumSumCredit: number = 0;

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

  private myRound(num) {
    return (Math.round(num * 100) / 100);
  };

  constructor() {
  }

  ngOnInit() {
  }

}
