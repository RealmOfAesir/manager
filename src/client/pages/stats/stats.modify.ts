import { Component, OnInit } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'stats.modify.html',
})
export class StatsModify implements OnInit {

  stat: any;

  constructor(public viewCtrl: ViewController, public navParams: NavParams) {}

  ngOnInit() {
    this.stat = this.navParams.get('stat');
  }

  submit() {
    this.viewCtrl.dismiss(this.stat);
  }

}
