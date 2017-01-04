import {Injectable} from '@angular/core';
import {Cars} from "../garage/draftData/Cars";
import {Ad} from "./data-objects/Ad";
import {Deferred} from "./Deffered";
import {DefaultKeyValueDiffer} from "@angular/core/src/change_detection/differs/default_keyvalue_differ";

@Injectable()
export class DBServiceService {
  private _database = null;
  protected cities = ["Алматы", "Астана", "Актау", "Караганда"];
  protected carEngineTypes = ['Дизельный', "Бензиновый", 'LPG'];
  protected transmissionTypes = ['МКПП', "АКПП"];

  private _isDataCreated: boolean = false;

  private _carData: Array<Ad> = null;

  constructor()
  {
    this._database = openDatabase("carPortal", '1.0', 'Car Portal Database', 5 * 1024 * 1024);

    if (this._database) {
      this._database.transaction((tx) => {
        tx.executeSql("SELECT * FROM car_list", [], this.dataReady, this.createData.bind(this));
      });
    }
  }

  public selectCars(filter?: any, prevDeffered?: Deferred<Array<Ad>>) {

    let deferred = !prevDeffered ? new Deferred() : prevDeffered;


    let filterString = '';
    if (filter) filterString = this.createCarFilter(filter);
    this._database.transaction((tx) => {
      tx.executeSql("SELECT * FROM car_list " + filterString, [],
        (tx, queryResult) => {
          deferred.resolve(<Array<Ad>>(queryResult.rows))
        }
      )
    });
    return deferred.promise;
  }

  protected createCarFilter(filter): string {
    let conditions: Array<string> = [];

    if (!filter.engineCapacity && !filter.transmissionType && !filter.engineType && !filter.carName && !filter.city)
      return "";

    if (filter.engineType)
      conditions.push("engineType == " + filter.engineType.join(" OR engineType == "));

    if (filter.transmissionType)
      conditions.push("transmissionType == " + filter.transmissionType.join(" OR transmissionType == "));

    if (filter.city)
      conditions.push("city == " + filter.city.join(" OR city == "));

    if (filter.carName && filter.carName != "")
      conditions.push("carName LIKE '%" + filter.carName + "%'");

    if(filter.engineCapacity)
      conditions.push('engineCapacity BETWEEN ' + filter.engineCapacity[0] + ' AND ' + filter.engineCapacity[1]);

    return "WHERE " + conditions.join(" AND ");
  }

  protected createData() {
    this.createCars();
  }

  protected createCars() {
    let aDaTa = Cars.accessoryData;
    let currentYear = (new Date()).getFullYear();

    var carList: Ad[] = [];
    for (let key in aDaTa) {
      let iterationsNumber: number = this.getRandomInt(4, 8);
      for (var j = 0; j < iterationsNumber; j++) {
        let randomCarParams = this.generateRandomCarParams();
        carList.push(
          new Ad({
            engineType: randomCarParams.engineType,
            engineCapacity: randomCarParams.engineCapacity,
            transmissionType: randomCarParams.transmission,
            city: this.cities[this.getRandomInt(0, this.cities.length - 1)],
            year: this.getRandomInt(2000, currentYear),
            price: this.getRandomInt(500000, 10000000),
            brand: key.split(' ')[0],
            model: key.split(' ')[1],
            carName: key,
            internalService: this.getRandomInt(0,2) === 0,
            photo: aDaTa[key].photoPath,
            ownerId: 'empty'
          })
        );
      }
    }
    this.shuffle(carList);
    if (carList.length > 0) {
      var columnNames: string[] = Object.keys(carList[0]);
      var columnNameList: string = columnNames.join(",");
      this._database.transaction((tx) => {
        tx.executeSql('CREATE TABLE IF NOT EXISTS car_list (' + columnNameList + ')', [],
          (insertTx) => {
            var values: any[] = [];
            var repl: string[] = [];
            for (var i = 0; i < carList.length; i++) {
              values = [];
              for (var key in carList[i]) {
                values.push(carList[i][key]);
              }
              repl = new Array(values.length);
              repl.fill('?');
              insertTx.executeSql('INSERT INTO car_list (' + columnNameList + ') VALUES (' + repl.join(',') + ')', values);
            }
          });
      });
    }
  }

  protected dataReady(tx, queryResult) {

  }

  protected shuffle(a) {
    for (let i = a.length; i; i--) {
      let j = Math.floor(Math.random() * i);
      [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
  }

  protected generateRandomCarParams() {
    return {
      engineCapacity: this.randomFloatBetween(0.8, 6.4, 1),
      transmission: this.transmissionTypes[this.getRandomInt(0, this.transmissionTypes.length - 1)],
      engineType: this.carEngineTypes[this.getRandomInt(0, this.carEngineTypes.length - 1)]
    };
  }

  private randomFloatBetween(minValue, maxValue, precision) {
    if (typeof(precision) == 'undefined') {
      precision = 2;
    }
    return parseFloat(Math.min(minValue + (Math.random() * (maxValue - minValue)), maxValue).toFixed(precision));
  }

  protected getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;

  }

  get isDataCreated(): boolean {
    return this._isDataCreated;
  }
}
