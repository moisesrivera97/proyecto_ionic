import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {
  clase = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.clase = this.navParams.get("clase");
    console.log(JSON.stringify(this.clase));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPage');
  }

}
