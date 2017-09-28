import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { HistorikuModal } from './modals/historiku/historiku';
import { DrejtuesModal } from './modals/drejtues/drejtues';
import { LigjevenesitModal } from './modals/ligjvenesit/ligjvenesit';
import { LegjislaturatModal } from './modals/legjislaturat/legjislaturat';
import { KushtetutaModal } from './modals/kushtetuta/kushtetuta';
import { RregullorjaModal } from './modals/rregullorja/rregullorja';
import { ZgjedhjeModal } from './modals/zgjedhje/zgjedhje';
import { FunksionetModal } from './modals/funksionet/funksionet';
import { NdertesaModal } from './modals/ndertesa/ndertesa';


@Component({
  selector: 'page-parlamenti',
  templateUrl: 'parlamenti.html'
})
export class ParlamentiPage {

  items: Array<any>;		
  
  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
  	this.items = [
      {
        category: 'Kuvendi',
        items: [
          { title: 'Historiku', component: HistorikuModal, type: 'Modal' },
          { title: 'Drejtuest ne Vite', component: DrejtuesModal, type: 'Modal' },
          { title: 'Ligjevenesit Shqipetare ne vite', component: LigjevenesitModal, type: '' },
          { title: 'Legjislaturat', component: LegjislaturatModal, type: 'modal' },
          { title: 'Kushtetuta', component: KushtetutaModal, type: '' },
          { title: 'Rregullorja', component: RregullorjaModal, type: '' },
          { title: 'Zgjedhje Parlamentare', component: ZgjedhjeModal, type: 'modal' },
          { title: 'Funksionet', component: FunksionetModal, type: '' },
          { title: 'Ndertesa', component: NdertesaModal, type: 'modal' }
        ]  
      },  
      {
        category: 'Struktura',
        items: [

        ]  
      }       
    ]; 
  }

  openModal(modalItem) {
    let modal = this.modalCtrl.create(HistorikuModal);
    modal.present(modalItem.component);
  }

}
