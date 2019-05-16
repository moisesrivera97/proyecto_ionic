import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
import { InfoPage } from '../info/info';

import { BuscarPage } from '../buscar/buscar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  clases = [];
  infoPage = InfoPage;
  buscarPage = BuscarPage;

  constructor(public navCtrl: NavController, public http: HttpClient) {
    this.http.get("/v1/app/v1/clases/").
    subscribe(data => {console.log(JSON.stringify(data));
    this.clases = data},
     error => {console.log(JSON.stringify(error));});
  }

  info(clase){
    console.log("click");
    this.navCtrl.push(this.infoPage, {clase: clase});
  }
  search(){
    console.log('search');
    this.navCtrl.push(this.buscarPage, {clases : this.clases});
  }

}
