import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { FjalimetModal } from '../modals/fjalimetModal';

@Component({
  selector: 'deputetet-details-page',
  templateUrl: 'ddetails.html'
})
export class DeputetiDetailsPage {
  deputeti: any; 
  constructor(public navCtrl: NavController, public params: NavParams, public modalCtrl: ModalController) {
    this.deputeti = params.get('item');
    //console.log(this.deputeti);
  }

  openModal() {
    let modal = this.modalCtrl.create(FjalimetModal, {deputeti: this.deputeti});
    modal.present(FjalimetModal);
  }
}
