

export class User {
  get login(): string {
    return this._login;
  }

  set login(value: string) {
    this._login = value;
    this.email = value;
  }
  private _login: string = "";
  public password: string = "";
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
  public location: any = {};
  constructor(cfg?: any) {
    //noinspection TypeScriptUnresolvedFunction
    Object.assign(this, cfg);
  }
}


export class Message{
  public isExpanded: boolean = false;
  public sentDate: string = '';
  public subject: string = '';
  public description: string = '';
  public isRead: boolean = false;
  public isSent: boolean;
  public sender: User;
  public recipient: User;
  public isNew: boolean = false;
  constructor(cfg?: any) {
    //noinspection TypeScriptUnresolvedFunction
    Object.assign(this, cfg);
    if(!cfg.recipient && this.isNew){
      this.recipient = new User({});
    }
  }
  public setRead(value:boolean){
    this.isRead = value;
  }
}

