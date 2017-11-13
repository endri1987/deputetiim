import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { MiratimModal } from './modals/miratim';
import { projektLigjModal } from './modals/projektLigj';

@Component({
  selector: 'page-ligjet',
  templateUrl: 'ligjet.html'
})
export class LigjetPage {

  public modals = {
     'ligjet': MiratimModal,
     'projektLigjet': projektLigjModal 
  }

  constructor(public navCtrl: NavController, private modalCtrl: ModalController) {

  }

  viewPage(page) {
    this.navCtrl.push(page)
  }
}
