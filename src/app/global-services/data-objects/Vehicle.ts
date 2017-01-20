export interface IVehicle {
  engineType: string;
  engineCapacity: number;
  year: number;
  brand: string;
  model: string;
  internalService: boolean;
  ownerData: string;
  transmissionType: string;
  photo: string;
  price: number;
  city: string;
  vinNumber: string;

}

export class Vehicle implements IVehicle{
  public type: string = "";
  public engineType: string = "";
  public engineCapacity: number = 0.0;
  public year: number = new Date().getFullYear();
  public brand: string = "";
  public model: string = "";
  public transmissionType: string = "";
  public internalService: boolean = false;
  public ownerData: string = "";
  public photo: string = "assets/default-car-image.jpg";
  public price: number;
  public city: string;
  public vinNumber: string;

  constructor(cfg?: any) {
    //noinspection TypeScriptUnresolvedFunction
    Object.assign(this, cfg);
  }
}
