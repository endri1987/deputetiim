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
  graphics: string = "assets/img/";

  constructor(public navCtrl: NavController) {
    this.pages = [
      { title: 'Parlamenti im', component: ParlamentiPage, icon: 'parlamentiim.png', bg: 'parlamenti animated fadeInRight'},
      { title: 'Deputeti im', component: DeputetiPage, icon: 'deputetiim.png' , bg: 'deputeti'},
      { title: 'Studime dhe Raporte', component: RaportePage, icon: 'studimeRaporte.png', bg: 'studime' },
      { title: 'Pyet Deputetin', component: PyetPage, icon: 'pyetDeputetin.png' , bg: 'pyetDeputetin'},
      { title: 'Gjithcka Mbi Ligjet', component: LigjetPage, icon: 'gjithckaLigjet.png', bg: 'gjithckaLigjet' },
      { title: 'Seancat Plenare', component: SeancatPage, icon: 'seancatPlenare.png', bg: 'seancat' },
      { title: 'Komisionet Parlamentare', component: KomisionetPage, icon: 'komisionetParlamentare.png', bg: 'komisionetParlamentare' },
      { title: 'Transparenca financiare', component: TransparencaPage, icon: 'transparenca.png', bg: 'transparenca' },
      { title: 'Gratë Deputete', component: GrateDeputetePage, icon: 'grateDeputete.png', bg: 'grateDeputete' },
      { title: 'Grupet Parlamentare', component: GrupetParlamentarePage, icon: 'grupetParlamentare.png', bg: 'grupetParlamentare' },
      { title: 'Institucionet e Pavaruara', component: InstitucionetPavaruaraPage, icon: 'institucionetPavarura.png', bg: 'institucionet' },
      { title: 'Sondazhe dhe vlerësime', component: SondazhedhevlerësimePage, icon: 'sondazhe.png' , bg: 'sondazhe'},
    ]; 
  }
ipt
  openPage(page) {
    this.navCtrl.push(page.component);
  }
}



