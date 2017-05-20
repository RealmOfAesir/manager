import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import { ConfigService } from '../services/config.service';

import { EnvVariables } from './env.token';
import { variables as devVars } from '../../../variables.dev';
import { variables as prodVars } from '../../../variables.prod';

import { StatsModify } from '../pages/stats/stats.modify';

import 'rxjs';
import '@swimlane/ngx-datatable/release/assets/icons.css';
import '@swimlane/ngx-datatable/release/themes/material.css';

export function environmentFactory() {
  return process.env.IONIC_ENV === 'prod' ? prodVars : devVars;
}

@NgModule({
  declarations: [
    MyApp,
    StatsModify
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    StatsModify
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ConfigService,
    { provide: EnvVariables, useFactory: environmentFactory },
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
