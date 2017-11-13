import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { ListaGrateModal } from './modals/lista-grate';

@Component({
  selector: 'grateDeputete-pyet',
  templateUrl: 'grateDeputete.html'
})
export class GrateDeputetePage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  openModal() {
    let modal = this.modalCtrl.create(ListaGrateModal);
    modal.present(ListaGrateModal);
  }


}
