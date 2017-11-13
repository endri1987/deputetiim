import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'ligji-details-page',
  templateUrl: 'ligjidetails.html'
})
export class LigjiDetails {
  content: any;

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public params: NavParams) {
    this.content = params.get('item');
    console.log(this.content);
    //console.log(this.deputeti);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }  
}