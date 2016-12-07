import {UserData} from "./UserData";
/**
 * Created by VBezruchenko on 12/3/2016.
 */
export class LoggedInData {


  constructor(private _loginKey:string) {

  }

  public get loginKey(): string
  {
    return this._loginKey;
  }

  public storeUserData(dataKey:string, data:UserData):void
  {
    let siteData:Object = JSON.parse(localStorage.getItem("siteData"));
    if(siteData)
    {
      if(!siteData[this._loginKey])
      {
        siteData[this._loginKey] = {};
      }
    }

    siteData[this._loginKey][dataKey] = data;

    localStorage.setItem("siteData", JSON.stringify(siteData));
  }

  public getUserData(dataKey:string):UserData
  {
    let siteData:any = JSON.parse(localStorage.getItem("siteData"));
    if(!siteData || !siteData[this._loginKey] || !siteData[this._loginKey][dataKey])
    {
      siteData = this.createData(dataKey, siteData);
    }

    return <UserData>(siteData[this._loginKey][dataKey]);
  }

  private createData(dataKey: string, siteData: any) {
    let rawData = JSON.parse(localStorage.getItem("siteData"));
    if(!rawData)
    {
      rawData = {};
    }
    if(!rawData[this._loginKey])
    {
      rawData[this._loginKey] = {};
    }
    rawData[this._loginKey][dataKey] = new UserData();
    localStorage.setItem("siteData", JSON.stringify(rawData));
    siteData = JSON.parse(localStorage.getItem("siteData"));
    return siteData;
  }

  public get isInitialBanerShown()
  {
    let banerKey:boolean = JSON.parse(localStorage.getItem("initial_baner_" + this._loginKey));
    return  (banerKey != null) || (banerKey == false);
  }

  public set isInitialBanerShown(value:boolean)
  {
    localStorage.setItem("initial_baner_" + this._loginKey, JSON.stringify(value));
  }
}
