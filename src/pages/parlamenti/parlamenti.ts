import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { HistorikuModal } from './modals/historiku/historiku';
import { DrejtuesModal } from './modals/drejtues/drejtues';
import { LigjvenesitModal } from './modals/ligjvenesit/ligjvenesit';
import { LegjislaturatModal } from './modals/legjislaturat/legjislaturat';
import { KushtetutaModal } from './modals/kushtetuta/kushtetuta';
import { RregullorjaModal } from './modals/rregullorja/rregullorja';
import { ZgjedhjeModal } from './modals/zgjedhje/zgjedhje';
import { FunksionetModal } from './modals/funksionet/funksionet';
import { NdertesaModal } from './modals/ndertesa/ndertesa';

import { KryetariModal } from './modals/kryetari/kryetari';
import { ZevendesModal } from './modals/zevendes/zevendes';
import { ByrojaModal } from './modals/byroja/byroja';
import { SekretariatetModal } from './modals/sekretariatet/sekretariatet';
import { KonferencaModal } from './modals/konferenca/konferenca';
import { KomisionetModal } from './modals/komisionet/komisionet';
import { NenkomisionetModal } from './modals/nenkomisionet/nenkomisionet';
import { KeshillatModal } from './modals/keshillat/keshillat';
import { GrupetModal } from './modals/grupet/grupet';

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
          { title: 'Ligjevenesit Shqipetare ne vite', component: LigjvenesitModal, type: '' },
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
          { title: 'Kryetari', component: KryetariModal, type: 'modal' },
          { title: 'Zevendeskryetaret', component: ZevendesModal, type: 'modal' },
          { title: 'Byroja e kuvendit', component: ByrojaModal, type: 'modal' },
          { title: 'Sekretariatet', component: SekretariatetModal, type: 'modal' },
          { title: 'Konferenca', component: KonferencaModal, type: 'modal' },
          { title: 'Komisionet', component: KomisionetModal, type: 'modal' },
          { title: 'Nenkomisionet', component: NenkomisionetModal, type: 'modal' },
          { title: 'Keshillat', component: KeshillatModal, type: 'modal' },
          { title: 'Grupet Parlamentare', component: GrupetModal, type: 'modal' }
        ]  
      }       
    ]; 
  }

  openModal(modalItem) {
    let modal = this.modalCtrl.create(HistorikuModal);
    modal.present(modalItem.component);
  }

}
