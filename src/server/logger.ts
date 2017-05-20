
export class Logger {

  private static _format(msg: string) {
    return `[${new Date()}] ${msg}`;
  }

  static debug(msg: string, obj?: any) {
    if(process.env.NODE_ENV === 'production') return;
    console.info(this._format(msg));
    if(obj) {
      console.info(JSON.stringify(obj));
    }
  }

  static log(msg: string) {
    console.log(this._format(msg));
  }

  static error(msg: string) {
    console.error(this._format(msg));
  }
}
