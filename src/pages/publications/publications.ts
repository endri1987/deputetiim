import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';


@Component({
  selector: 'page-publications',
  templateUrl: 'publications.html'
})
export class PublicationsPage {

  constructor(public navCtrl: NavController, public iab:InAppBrowser) {

  }

  openPdf(url) {
  	let browser = this.iab.create(url);
  	browser.show();
  }
}