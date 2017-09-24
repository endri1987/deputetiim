import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'modal-historiku',
  templateUrl: 'historiku.html'
})

export class HistorikuModal {

  constructor(public navCtrl: NavController, public viewCtrl: ViewController) { 

  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}