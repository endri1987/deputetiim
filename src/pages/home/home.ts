import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ParlamentiPage } from '../parlamenti/parlamenti';
import { DeputetiPage } from '../deputeti/deputeti';
import { RaportePage } from '../raporte/raporte';
import { PyetPage } from '../pyet/pyet';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  pages: Array<{title: string, component: any, icon: string }>;

  constructor(public navCtrl: NavController) {
    this.pages = [
      { title: 'Parlamenti im', component: ParlamentiPage, icon: '' },
      { title: 'Deputeti im', component: DeputetiPage, icon: '' },
      { title: 'Studime dhe Raporte', component: RaportePage, icon: '' },
      { title: 'Pyet Deputetin', component: PyetPage, icon: '' },
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


