import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'modal-nenkomisionet',
  templateUrl: 'nenkomisionet.html'
})

export class NenkomisionetModal {

  constructor(public navCtrl: NavController, public viewCtrl: ViewController) { 

  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}