import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ParlamentiPage } from '../parlamenti/parlamenti';
import { DeputetiPage } from '../deputeti/deputeti';
import { RaportePage } from '../raporte/raporte';
import { PyetPage } from '../pyet/pyet';
import { LigjetPage } from '../ligjet/ligjet';
import { SeancatPage } from '../seancat/seancat';
import { KomisionetPage } from '../komisionet/komisionet';
import { TransparencaPage } from '../transparenca/transparenca';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  pages: Array<{title: string, component: any, icon: string }>;

  constructor(public navCtrl: NavController) {
    this.pages = [
      { title: 'Parlamenti im', component: ParlamentiPage, icon: 'bicycle' },
      { title: 'Deputeti im', component: DeputetiPage, icon: 'home' },
      { title: 'Studime dhe Raporte', component: RaportePage, icon: 'bowtie' },
      { title: 'Pyet Deputetin', component: PyetPage, icon: 'build' },
      { title: 'Gjithcka Mbi Ligjet', component: LigjetPage, icon: 'cafe' },
      { title: 'Seancat Plenare', component: SeancatPage, icon: 'flag' },
      { title: 'Komisionet Parlamentare', component: KomisionetPage, icon: 'flag' },
      { title: 'Transparenca financiare', component: TransparencaPage, icon: 'bicycle' },
    ]; 
  }

  openPage(page) {
    this.navCtrl.push(page.component);
  }
}
@Component({
  templateUrl: 'template.html'
})
export class ImagePage { }


