import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'modal-drejtues',
  templateUrl: 'drejtues.html'
})

export class DrejtuesModal {

  constructor(public navCtrl: NavController, public viewCtrl: ViewController) { 

  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}