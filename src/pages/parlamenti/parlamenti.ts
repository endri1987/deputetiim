import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { HistorikuModal } from './modals/historiku/historiku';
import { DrejtuesModal } from './modals/drejtues/drejtues';

@Component({
  selector: 'page-parlamenti',
  templateUrl: 'parlamenti.html'
})
export class ParlamentiPage {

  items: Array<{title: string, component: any, type: string}>;		
  
  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
  	this.items = [
      { title: 'Historiku', component: HistorikuModal, type: 'Modal' },
      { title: 'Drejtuest ne Vite', component: DrejtuesModal, type: 'Modal' },
    ]; 
  }

  openModal(modalItem) {
    let modal = this.modalCtrl.create(HistorikuModal);
    modal.present(modalItem.component);
  }

}
