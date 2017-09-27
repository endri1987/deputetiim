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
import { TransparencaPage } from '../pages/transparenca/transparenca';

import { HistorikuModal } from '../pages/parlamenti/modals/historiku/historiku';
import { DrejtuesModal } from '../pages/parlamenti/modals/drejtues/drejtues';
import { LigjevenesitModal } from '../pages/parlamenti/modals/ligjvenesit/ligjvenesit';
import { LegjislaturatModal } from '../pages/parlamenti/modals/legjislaturat/legjislaturat';
import { KushtetutaModal } from '../pages/parlamenti/modals/kushtetuta/kushtetuta';
import { RregullorjaModal } from '../pages/parlamenti/modals/rregullorja/rregullorja';
import { ZgjedhjeModal } from '../pages/parlamenti/modals/zgjedhje/zgjedhje';
import { FunksionetModal } from '../pages/parlamenti/modals/funksionet/funksionet';
import { NdertesaModal } from '../pages/parlamenti/modals/ndertesa/ndertesa';

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
    TransparencaPage,
    HistorikuModal,
    DrejtuesModal,
    LigjevenesitModal,
    LegjislaturatModal,
    KushtetutaModal,
    RregullorjaModal,
    ZgjedhjeModal,
    FunksionetModal,
    NdertesaModal
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
    TransparencaPage,
    HistorikuModal,
    DrejtuesModal,
    LigjevenesitModal,
    LegjislaturatModal,
    KushtetutaModal,
    RregullorjaModal,
    ZgjedhjeModal,
    FunksionetModal,
    NdertesaModal        
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
