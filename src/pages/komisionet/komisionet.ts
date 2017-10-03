import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';

import { KclapdnModal } from './modals/kclapdn/kclapdn';
import { KIntegrimModal } from './modals/kintegrim/kintegrim';
import { KPJashtModal } from './modals/kpjasht/kpjasht';
import { KEkonomiModal } from './modals/kekonomi/kekonomi';
import { KSiguriModal } from './modals/ksiguri/ksiguri';
import { KTregtiModal } from './modals/ktregti/ktregti';
import { KPuneModal } from './modals/kpune/kpune';
import { KEdukimModal } from './modals/kedukim/kedukim';
import { NenkomisionetModal2 } from './modals/nenkomisionet/nenkomisionet';

@Component({
  selector: 'page-komisionet',
  templateUrl: 'komisionet.html'
})
export class KomisionetPage {

  items: Array<any>;	

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
		this.items = [
			{
		    category: 'Komisionet e perhershme',
		    items: [
					{ title: 'Komisioni për Çështjet Ligjore, Administratën Publike dhe të Drejtat e Njeriut', component: KclapdnModal, type: 'modal' }, 
					{ title: 'Komisioni për Integrimin Europian', component: KIntegrimModal, type: 'modal' },
					{ title: 'Komisioni për Politikën e Jashtme', component: KPJashtModal, type: 'modal' },
					{ title: 'Komisioni për Ekonominë dhe Financat', component: KEkonomiModal, type: 'modal' },
					{ title: 'Komisioni për Sigurinë Kombëtare', component: KSiguriModal, type: 'modal' },
					{ title: 'Komisioni për Veprimtaritë Prodhuese, Tregtinë dhe Mjedisin', component: KTregtiModal, type: 'modal' },
					{ title: 'Komisioni për Punën, Çështjet Sociale', component: KPuneModal, type: 'modal' },
					{ title: 'Komisioni për Edukimin dhe Mjetet e Informimit Publik', component: KEdukimModal, type: 'modal' },
					{ title: 'Nenkomisionet', component: NenkomisionetModal2, type: 'modal' }      
				]	 
	    },  
	    {
	      category: 'Komisionet e Posacme',
	      items: [

	      ]  
	    },
	    {
	      category: 'Komisionet Hetimore',
	      items: [

	      ]  
    	}              
    ]; 
  }

  openModal(modalItem) {
    let modal = this.modalCtrl.create(modalItem);
    modal.present(modalItem);
  }

}
