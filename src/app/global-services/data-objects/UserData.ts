import {CarData} from "./CarData";
import {Vehicle} from "./Vehicle";
/**
 * Created by VBezruchenko on 12/3/2016.
 */
export class UserData
{
  public carList:Array<Vehicle> = [];
  public selectedCar:Vehicle = null;
  public shopCartData:Array<IGoods> = [];
}

export interface IGoods{
  readonly type:string;
  photo:string;
}
