var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.graphics = "assets/img/";
        this.pages = [
            { title: 'Parlamenti im', component: ParlamentiPage, icon: 'parlamenti.png', bg: 'parlamenti animated fadeInRight' },
            { title: 'Deputeti im', component: DeputetiPage, icon: 'deputeti.png', bg: 'deputeti' },
            { title: 'Studime dhe Raporte', component: RaportePage, icon: 'studimeRaporte.png', bg: 'studime' },
            { title: 'Pyet Deputetin', component: PyetPage, icon: 'pyetDeputetin.png', bg: 'pyetDeputetin' },
            { title: 'Gjithcka Mbi Ligjet', component: LigjetPage, icon: 'gjithckaLigjet.png', bg: 'gjithckaLigjet' },
            { title: 'Seancat Plenare', component: SeancatPage, icon: 'seancatPlenare.png', bg: 'seancat' },
            { title: 'Komisionet Parlamentare', component: KomisionetPage, icon: 'komisionetParlamentare.png', bg: 'komisionetParlamentare' },
            { title: 'Transparenca financiare', component: TransparencaPage, icon: 'transparenca.png', bg: 'transparenca' },
            { title: 'Gratë Deputete', component: GrateDeputetePage, icon: 'grateDeputete.png', bg: 'grateDeputete' },
            { title: 'Grupet Parlamentare', component: GrupetParlamentarePage, icon: 'grupetParlamentare.png', bg: 'grupetParlamentare' },
            { title: 'Institucionet e Pavaruara', component: InstitucionetPavaruaraPage, icon: 'institucionetPavarura.png', bg: 'institucionet' },
            { title: 'Sondazhe dhe vlerësime', component: SondazhedhevlerësimePage, icon: 'sondazhe.png', bg: 'sondazhe' },
        ];
    }
    HomePage.prototype.openPage = function (page) {
        this.navCtrl.push(page.component);
    };
    HomePage = __decorate([
        Component({
            selector: 'page-home',
            templateUrl: 'home.html'
        }),
        __metadata("design:paramtypes", [NavController])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.js.map