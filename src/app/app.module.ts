import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { FindsPage } from '../pages/finds/finds';
import { TabsPage } from '../pages/tabs/tabs';
import { PublicationsPage } from '../pages/publications/publications';
import { ParlamentiPage } from '../pages/parlamenti/parlamenti';
import { DeputetiPage } from '../pages/deputeti/deputeti';
import { RaportePage } from '../pages/raporte/raporte';
import { PyetPage } from '../pages/pyet/pyet';
import { LigjetPage } from '../pages/ligjet/ligjet';
import { SeancatPage } from '../pages/seancat/seancat';
import { KomisionetPage } from '../pages/komisionet/komisionet';

import { HistorikuModal } from '../pages/parlamenti/modals/historiku/historiku';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    FindsPage,
    TabsPage,
    PublicationsPage,
    ParlamentiPage,
    DeputetiPage,
    RaportePage,
    PyetPage,
    LigjetPage,
    SeancatPage,
    KomisionetPage,
    HistorikuModal

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    FindsPage,
    TabsPage,
    PublicationsPage,
    ParlamentiPage,
    DeputetiPage,
    RaportePage,
    PyetPage,
    LigjetPage,
    SeancatPage,
    KomisionetPage,
    HistorikuModal    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
