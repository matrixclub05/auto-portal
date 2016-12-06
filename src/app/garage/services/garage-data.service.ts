import { Injectable } from '@angular/core';
import {Trucks} from "../draftData/Trucks";
import {Snowmobiles} from "../draftData/Snowmobiles";
import {Quadrocycles} from "../draftData/Quadrocycles";
import {Motorcycles} from "../draftData/Motorcycles";
import {Cars} from "../draftData/Cars";
import {Service} from "../draftData/Service";
import {CarData} from "../../global-services/data-objects/CarData";

@Injectable()
export class GarageDataService {

  private _sections:SectionsDictionary = {};
  private _serviceBook:Array<ServiceRow> = [];

  constructor()
  {
    this._sections["Автомобили"] = Cars.data;
    this._sections["Мотоциклы"] = Motorcycles.data;
    this._sections["Квадроциклы"] = Quadrocycles.data;
    this._sections["Снегоходы"] = Snowmobiles.data;
    this._sections["Грузовики"] = Trucks.data;

    this._serviceBook = Service.data;
  }

  public get serviceBook():Array<ServiceRow>
  {
    return this._serviceBook;
  }

  public get sectionList():Array<string>
  {
    return Object.keys(this._sections);
  }

  public getManufacturersBySection(section:string):Array<string>
  {
    let returnList:Array<string> = null;
    if(this._sections[section])
    {
      returnList = Object.keys(this._sections[section]);
    }
    return returnList;
  }

  public getVehiclesByManufacturer(section:string, manufacturer:string):Array<string>
  {
    let vehicles:Array<string> = null;
    if(this._sections[section])
    {
      if(this._sections[section][manufacturer])
      {
        vehicles = Object.keys(this._sections[section][manufacturer])
      }
    }
    return vehicles;
  }

  public getVehicleYears(section:string, manufacturer:string, modelName:string):Array<number>
  {
    let vehicleYear:Array<number> = null;
    if(this._sections[section])
    {
      if(this._sections[section][manufacturer])
      {
        if(this._sections[section][manufacturer][modelName])
        {
          vehicleYear = this._sections[section][manufacturer][modelName];
        }
      }
    }
    return vehicleYear;
  }

  protected parseTEMP(p:Object)
  {
    let carEngineTypes = ['Дизельный', "Бензиновый", 'LPG'];
    let carEngineCapacity = ['2.0', '1.8', '1.6', '2.0T', '3.0T'];
    let transmissionType = ['МКПП', "АКПП" ];
    var out = {};
    for (var manufacturer in p) {
      var i = 0;
      for(var model in p[manufacturer])
      {
        let obj:ICarAccessory = <ICarAccessory>{};
        obj.engineCapacity = carEngineCapacity;
        obj.engineType = carEngineTypes;
        obj.transmissionType = transmissionType;
        obj.photoPath = ("assets/" + manufacturer + "-" + model + "/" + model + ".jpg").toLowerCase();
        out[manufacturer + " " +model] = obj;
        if(i == 2)
        {
          break;
        }
        i++;
      }
    }

    debugger;
    return out;
  }

  public getCarWithAccessory(manufacturer:string, modelName:string):ICarAccessory
  {
    let vehicleAccessories:ICarAccessory = <ICarAccessory>{};
    if(Cars.accessoryData)
    {
      if(Cars.accessoryData[manufacturer  + " " +modelName])
      {
        if(Cars.accessoryData[manufacturer + " " +modelName])
        {
          vehicleAccessories = <ICarAccessory>(Cars.accessoryData[manufacturer][modelName]);
        }
      }
    }
    return vehicleAccessories;
  }

  public getCarsWithAccessory()
  {
    return Cars.accessoryData;
  }
}

export interface ICarAccessory
{
  engineCapacity:string[];
  engineType:string[];
  transmissionType:string[];
  photoPath:string;
}

export interface ServiceRow
{
  description:string;
  done:boolean;
}

interface SectionsDictionary
{
  [sectionName:string]:ManufacturersAndModels;
}

interface ManufacturersAndModels
{
  [manufacturer:string]:ModelAndYears;
}

interface ModelAndYears
{
  [modeName:string]:Array<number>
}


