import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'modal-projektLigj',
  templateUrl: 'projektLigj.html'
})

export class projektLigjModal {

  constructor(public navCtrl: NavController, public viewCtrl: ViewController) { 

  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}