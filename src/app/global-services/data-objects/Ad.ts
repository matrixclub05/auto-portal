import {Vehicle, IVehicle} from "./Vehicle";

export class Ad implements IVehicle{
  public type: string = "empty";
  public engineType: string = "";
  public engineCapacity: number = 0.0;
  public year: number = new Date().getFullYear();
  public brand: string = "";
  public model: string = "";
  public transmissionType: string = "";
  public internalService: boolean = false;
  public ownerData: string = "";
  public photo: string;
  public price: number;
  public city: string;
  public carName:string;

  constructor(cfg?: any) {
    //noinspection TypeScriptUnresolvedFunction
    Object.assign(this, cfg);
  }
}
