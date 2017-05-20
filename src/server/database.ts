import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { Logger } from './logger';

class Database {

  isReady: Promise<any>;

  constructor() {

    this.isReady = new Promise((resolve, reject) => {
      createConnection().then(connection => {
        Logger.log('DB ready!');
        resolve(connection);
      }).catch(error => reject(error));
    });

  }
}

export const DB = new Database();
