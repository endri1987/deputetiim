import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'modal-fjalimet',
  templateUrl: 'fjalimetModal.html'
})

export class FjalimetModal {

  public deputeti: any; 	

  constructor(public navCtrl: NavController, public iab:InAppBrowser, public params: NavParams, public viewCtrl: ViewController) { 
  	this.deputeti = params.get('deputeti');
  	console.log(this.deputeti);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  openPdf(url) {
    let browser = this.iab.create(url);
    browser.show();
  }  
}