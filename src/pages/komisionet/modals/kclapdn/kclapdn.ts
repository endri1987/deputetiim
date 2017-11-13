import { Component } from '@angular/core';
import { NavController , NavParams} from 'ionic-angular';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'modal-kclapdn',
  templateUrl: 'kclapdn.html'
})

export class KclapdnModal {

  content: any;

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public params: NavParams) { 
  	this.content = params.get('item');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}