import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'modal-rregullorja',
  templateUrl: 'rregullorja.html'
})

export class RregullorjaModal {

  constructor(public navCtrl: NavController, public iab:InAppBrowser, public viewCtrl: ViewController) { 

  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  openPdf(url) {
    let browser = this.iab.create(url);
    browser.show();
  }   
}