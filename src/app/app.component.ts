import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { FindsPage } from '../pages/finds/finds';
import { TabsPage } from '../pages/tabs/tabs';
import { PublicationsPage } from '../pages/publications/publications';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any = TabsPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
 
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Kreu', component: TabsPage },
      { title: 'Rreth Projektit', component: AboutPage },
      { title: 'Publikime', component: PublicationsPage },
      { title: 'Gjetjet Kryesore', component: FindsPage },
      { title: 'Kontakto', component: ContactPage },
    ];      
  } 

  openPage(page) {
    
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

}



