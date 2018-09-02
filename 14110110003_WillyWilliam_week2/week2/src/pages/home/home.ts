import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ParamGetPage } from '../param-get/param-get';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  onButtonClicked(){
    this.navCtrl.push(ParamGetPage, {paramSatu: 'mahasiswa', paramDua: '1234'});
  }

}
