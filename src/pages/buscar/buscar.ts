import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InfoPage } from '../info/info';

/**
 * Generated class for the BuscarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buscar',
  templateUrl: 'buscar.html',
})
export class BuscarPage {
  lista = [];
  clases = [];

  infoPage = InfoPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.lista= this.navParams.get('clases');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuscarPage');
  }
  getItems(ev: any) {
    console.log(ev.target.value);
    let materia = ev.target.value.toLowerCase();
    let profe = ev.target.value.toLowerCase();

    this.clases = this.lista.filter(clase => {return clase.Materia.Nombre.toLowerCase().includes(materia) || clase.Profesor.toLowerCase().includes(profe)});
    console.log(JSON.stringify(this.clases));

}

info(clase){
  this.navCtrl.push(this.infoPage, {clase: clase});
}

}
