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
import { GrateDeputetePage } from '../grateDeputete/grateDeputete';
import { GrupetParlamentarePage } from '../grupetparlamentare/grupetparlamentare';
import { InstitucionetPavaruaraPage } from '../institucionetepavaruara/institucionetepavaruara';
import { SondazhedhevlerësimePage } from '../sondazhedhevlerësime/sondazhedhevlerësime';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  pages: Array<{title: string, component: any, icon: string, bg: string }>;

  constructor(public navCtrl: NavController) {
    this.pages = [
      { title: 'Parlamenti im', component: ParlamentiPage, icon: 'bicycle', bg: 'parlamenti animated fadeInRight'},
      { title: 'Deputeti im', component: DeputetiPage, icon: 'home' , bg: 'deputeti'},
      { title: 'Studime dhe Raporte', component: RaportePage, icon: 'bowtie', bg: 'studime' },
      { title: 'Pyet Deputetin', component: PyetPage, icon: 'build' , bg: 'pyetDeputetin'},
      { title: 'Gjithcka Mbi Ligjet', component: LigjetPage, icon: 'cafe', bg: 'gjithckaLigjet' },
      { title: 'Seancat Plenare', component: SeancatPage, icon: 'flag', bg: 'seancat' },
      { title: 'Komisionet Parlamentare', component: KomisionetPage, icon: 'flag', bg: 'komisionetParlamentare' },
      { title: 'Transparenca financiare', component: TransparencaPage, icon: 'bicycle', bg: 'transparenca' },
      { title: 'Gratë Deputete', component: GrateDeputetePage, icon: 'woman', bg: 'grateDeputete' },
      { title: 'Grupet Parlamentare', component: GrupetParlamentarePage, icon: 'bowtie', bg: 'grupetParlamentare' },
      { title: 'Institucionet e Pavaruara', component: InstitucionetPavaruaraPage, icon: 'bowtie', bg: 'institucionet' },
      { title: 'Sondazhe dhe vlerësime', component: SondazhedhevlerësimePage, icon: 'md-contacts' , bg: 'sondazhe'},
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


