import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'modal-seancat',
  templateUrl: 'smodal.html'
})

export class SeancatModal {
  content: any;
  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public params: NavParams) { 
  	this.content = params.get('item');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}