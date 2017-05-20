
import * as _ from 'lodash';
import * as express from 'express';

import { Logger } from './logger';
import { AllRoutes } from './routes';

export class APIServer {

  isReady: Promise<any>;
  app: any;

  constructor() {
    this.app = express();
    this.app.use(require('cors')());
    this.app.use(require('body-parser').urlencoded());
    this.app.use(require('body-parser').json());

    _.each(AllRoutes, (route) => {
      const routeClass = new route(this.app);
      routeClass.createRoutes();
    });

    this.isReady = new Promise((resolve) => {
      const port = process.env.PORT || 9008;
      this.app.listen(port, () => {
        Logger.log(`API Started on port ${port}`);
        resolve();
      });
    });
  }
}

export const API = new APIServer();

