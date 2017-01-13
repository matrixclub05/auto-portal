

export class User {
  get fullName(): string {
    return this.firstName + ' ' + this.lastName;
  }

  set fullName(value: string) {
    var split = value.split(' ');
    this.firstName = split[0];
    this.lastName = split[1];
    this._fullName = value;
  }
  public firstName: string = 'Анонимный';
  public middleName: string = '';
  public lastName: string = 'Пользователь';
  public phoneNumber: string = '';
  public email: string = '';
  public photo: string = 'assets/user/default.png';
  public workPlace: any = null;
  public position: string = '';
  private _fullName: string;
  constructor(cfg?: any) {
    //noinspection TypeScriptUnresolvedFunction
    Object.assign(this, cfg);
  }
}


export class Message{
  public sentDate: string = '';
  public subject: string = '';
  public description: string = 'Нет описания';
  public isRead: boolean = false;
  public isSent: boolean;
  public sender: User;
  constructor(cfg?: any) {
    //noinspection TypeScriptUnresolvedFunction
    Object.assign(this, cfg);
  }
  public setRead(value:boolean){
    this.isRead = value;
  }
}

