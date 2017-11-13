import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'modal-grupi',
  templateUrl: './grupiModal.html'
})
export class GrupiModal {

  public grupi: any;
  
  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public params: NavParams) {
    let items = params.get('item');
    console.log(items);
    items.list.shift();
    this.grupi = items;
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}