import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicPageModule } from 'ionic-angular';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { Stats } from './stats';
import { StatsService } from './stats.service';

@NgModule({
  declarations: [
    Stats
  ],
  providers: [
    StatsService
  ],
  imports: [
    HttpModule,
    NgxDatatableModule,
    IonicPageModule.forChild(Stats)
  ],
  exports: [
    Stats
  ]
})
export class StatsModule {}
