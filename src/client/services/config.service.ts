
import { Injectable, Inject } from '@angular/core';

import { EnvVariables } from '../app/env.token';

@Injectable()
export class ConfigService {
  constructor(@Inject(EnvVariables) private envVars) {}

  get url() {
    return this.envVars.api;
  }

}
