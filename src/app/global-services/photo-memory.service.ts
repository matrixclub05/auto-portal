import { Injectable } from '@angular/core';
import {CarData} from "./data-objects/CarData";

@Injectable()
export class PhotoMemoryService {

  constructor() { }

  public addCarImage(car:any, file:any)
  {
    var fileReader = new FileReader();
    fileReader.onload = function(event){
      localStorage.setItem(this.getCarName(car), event.target.result);
    }.bind(this);
    fileReader.readAsDataURL(file);
  }

  public getCarImage(car:any)
  {
    var img = localStorage.getItem(this.getCarName(car));
    if(img)
    {
      return img;
    }
    return "assets/default-car-image.jpg";
  }

  private getCarName(car:any)
  {
    return car.manufacturer ? car.model + car.manufacturer + car.year : car.model + car.brand + car.year;
  }
}
