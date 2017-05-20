import "reflect-metadata";

import { DB } from './database';
import { API } from './api';

import { Logger } from './logger';

Promise.all([DB.isReady, API.isReady]).then(() => {
  Logger.log('Server ready!');
});
