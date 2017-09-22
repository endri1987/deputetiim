import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

import { FindsPage } from '../finds/finds';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root: any = HomePage;
  tab2Root: any = FindsPage;
  tab3Root: any = ContactPage;

  mySelectedIndex: number;

  constructor(navParams: NavParams) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }
}
