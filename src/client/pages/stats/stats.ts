import { Component, OnInit } from '@angular/core';
import { IonicPage, ModalController, AlertController } from 'ionic-angular';
import { StatsService } from './stats.service';
import { StatsModify } from './stats.modify';

import * as _ from 'lodash';

@IonicPage({
  segment: 'stats'
})
@Component({
  selector: 'page-stats',
  templateUrl: 'stats.html',
})
export class Stats implements OnInit {

  stats: any[];

  constructor(
    public statsService: StatsService,
    public modalCtrl: ModalController,
    public alertCtrl: AlertController
  ) {}

  ngOnInit() {
    this.statsService.getStats().subscribe(stats => this.stats = stats);
  }

  private statModal(stat) {
    const modal = this.modalCtrl.create(StatsModify, { stat });
    modal.onDidDismiss(data => {
      if(!data) return;

      if(!data.id) {
        this.statsService.createStat(data)
          .subscribe(newStat => this.stats.push(stat));
      } else {
        this.statsService.updateStat(data)
          .subscribe(newStat => {
            _.extend(this.stats[newStat.$$index], newStat);
          });
      }
    });
    modal.present();
  }

  createStat() {
    this.statModal({});
  }

  updateStat(stat) {
    this.statModal(_.cloneDeep(stat));
  }

  removeStat(stat) {
    this.alertCtrl.create({
      title: 'Remove Stat',
      message: `Are you sure you want to remove the stat ${stat.name}?`,
      buttons: [
        { text: 'No' },
        { text: 'Yes, Burninate It', handler: () => {
          this.statsService.removeStat(stat)
            .subscribe(() => {
              this.stats.splice(stat.$$index, 1);
            })
        } }
      ]
    }).present();
  }

}
