export class Deferred<T> {

  //noinspection TypeScriptUnresolvedVariable
  promise: Promise<T>;
  resolve: (value?: T | PromiseLike<T>) => void;
  reject:  (reason?: any) => void;

  constructor() {
    //noinspection TypeScriptUnresolvedFunction
    this.promise = new Promise<T>((resolve, reject) => {
      this.resolve = resolve;
      this.reject  = reject;
    });
  }
}
