import {CarData} from "./CarData";
/**
 * Created by VBezruchenko on 12/3/2016.
 */
export class UserData
{
  public carList:Array<CarData> = [];
  public selectedCar:CarData = null;
  public shopCartData:Array<IGoods> = [];
}

export interface IGoods{
  readonly type:string;
  photo:string;
}
