import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'modal-kryetari',
  templateUrl: 'kryetari.html'
})

export class KryetariModal {

  constructor(public navCtrl: NavController, public viewCtrl: ViewController) { 

  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
  
}