import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
  segment: 'items'
})
@Component({
  selector: 'page-items',
  templateUrl: 'items.html',
})
export class Items {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Items');
  }

}
