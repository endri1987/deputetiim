import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { InAppBrowser } from '@ionic-native/in-app-browser';

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
import { GrateDeputetePage } from '../pages/grateDeputete/grateDeputete';
import { GrupetParlamentarePage } from '../pages/grupetparlamentare/grupetparlamentare';
import { InstitucionetPavaruaraPage } from '../pages/institucionetepavaruara/institucionetepavaruara';
import { SondazhedhevlerësimePage } from '../pages/sondazhedhevlerësime/sondazhedhevlerësime';
import { DetailsPage } from '../pages/details/details';
import { DeputetiDetailsPage } from '../pages/deputeti/details/details';

import { HistorikuModal } from '../pages/parlamenti/modals/historiku/historiku';
import { DrejtuesModal } from '../pages/parlamenti/modals/drejtues/drejtues';
import { LigjvenesitModal } from '../pages/parlamenti/modals/ligjvenesit/ligjvenesit';
import { LegjislaturatModal } from '../pages/parlamenti/modals/legjislaturat/legjislaturat';
import { KushtetutaModal } from '../pages/parlamenti/modals/kushtetuta/kushtetuta';
import { RregullorjaModal } from '../pages/parlamenti/modals/rregullorja/rregullorja';
import { ZgjedhjeModal } from '../pages/parlamenti/modals/zgjedhje/zgjedhje';
import { FunksionetModal } from '../pages/parlamenti/modals/funksionet/funksionet';
import { NdertesaModal } from '../pages/parlamenti/modals/ndertesa/ndertesa';

import { KryetariModal } from '../pages/parlamenti/modals/kryetari/kryetari';
import { ZevendesModal } from '../pages/parlamenti/modals/zevendes/zevendes';
import { ByrojaModal } from '../pages/parlamenti/modals/byroja/byroja';
import { SekretariatetModal } from '../pages/parlamenti/modals/sekretariatet/sekretariatet';
import { KonferencaModal } from '../pages/parlamenti/modals/konferenca/konferenca';
import { KomisionetModal } from '../pages/parlamenti/modals/komisionet/komisionet';
import { NenkomisionetModal } from '../pages/parlamenti/modals/nenkomisionet/nenkomisionet';
import { KeshillatModal } from '../pages/parlamenti/modals/keshillat/keshillat';
import { GrupetModal } from '../pages/parlamenti/modals/grupet/grupet';

import { KclapdnModal } from '../pages/komisionet/modals/kclapdn/kclapdn';
import { KIntegrimModal } from '../pages/komisionet/modals/kintegrim/kintegrim';
import { KPJashtModal } from '../pages/komisionet/modals/kpjasht/kpjasht';
import { KEkonomiModal } from '../pages/komisionet/modals/kekonomi/kekonomi';
import { KSiguriModal } from '../pages/komisionet/modals/ksiguri/ksiguri';
import { KTregtiModal } from '../pages/komisionet/modals/ktregti/ktregti';
import { KPuneModal } from '../pages/komisionet/modals/kpune/kpune';
import { KEdukimModal } from '../pages/komisionet/modals/kedukim/kedukim';
import { NenkomisionetModal2 } from '../pages/komisionet/modals/nenkomisionet/nenkomisionet';

import { SeancatModal } from '../pages/seancat/modal/smodal';

import { DeputetetService } from '../providers/deputetet-service';
import { PostService } from '../providers/post-service';

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
    LigjvenesitModal,
    LegjislaturatModal,
    KushtetutaModal,
    RregullorjaModal,
    ZgjedhjeModal,
    FunksionetModal,
    NdertesaModal,
    KryetariModal,
    ZevendesModal,
    ByrojaModal,
    SekretariatetModal,
    KonferencaModal,
    KomisionetModal,
    NenkomisionetModal,
    KeshillatModal,
    GrateDeputetePage,
    GrupetParlamentarePage,
    GrupetModal,
    KclapdnModal,
    KIntegrimModal,
    KPJashtModal,
    KEkonomiModal,
    KSiguriModal,
    KTregtiModal,
    KPuneModal,
    KEdukimModal,
    SeancatModal,
    InstitucionetPavaruaraPage,
    SondazhedhevlerësimePage,
    NenkomisionetModal2,
    DetailsPage,
    DeputetiDetailsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
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
    LigjvenesitModal,
    LegjislaturatModal,
    KushtetutaModal,
    RregullorjaModal,
    ZgjedhjeModal,
    FunksionetModal,
    NdertesaModal,
    KryetariModal,
    ZevendesModal,
    ByrojaModal,
    SekretariatetModal,
    KonferencaModal,
    KomisionetModal,
    NenkomisionetModal,
    KeshillatModal,
    GrateDeputetePage,
    GrupetParlamentarePage,
    GrupetModal,
    KclapdnModal,
    KIntegrimModal,
    KPJashtModal,
    KEkonomiModal,
    KSiguriModal,
    KTregtiModal,
    KPuneModal,
    KEdukimModal,
    SeancatModal, 
    InstitucionetPavaruaraPage,
    SondazhedhevlerësimePage,
    NenkomisionetModal2,
    DetailsPage,
    DeputetiDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DeputetetService,
    PostService,
    InAppBrowser
  ]
})
export class AppModule {}
