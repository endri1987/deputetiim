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
import { ModalController } from 'ionic-angular';
import { HistorikuModal } from './modals/historiku/historiku';
import { DrejtuesModal } from './modals/drejtues/drejtues';
import { LigjvenesitModal } from './modals/ligjvenesit/ligjvenesit';
import { LegjislaturatModal } from './modals/legjislaturat/legjislaturat';
import { KushtetutaModal } from './modals/kushtetuta/kushtetuta';
import { RregullorjaModal } from './modals/rregullorja/rregullorja';
import { ZgjedhjeModal } from './modals/zgjedhje/zgjedhje';
import { FunksionetModal } from './modals/funksionet/funksionet';
import { NdertesaModal } from './modals/ndertesa/ndertesa';
import { KryetariModal } from './modals/kryetari/kryetari';
import { ZevendesModal } from './modals/zevendes/zevendes';
import { ByrojaModal } from './modals/byroja/byroja';
import { SekretariatetModal } from './modals/sekretariatet/sekretariatet';
import { KonferencaModal } from './modals/konferenca/konferenca';
import { KomisionetModal } from './modals/komisionet/komisionet';
import { NenkomisionetModal } from './modals/nenkomisionet/nenkomisionet';
import { KeshillatModal } from './modals/keshillat/keshillat';
import { GrupetModal } from './modals/grupet/grupet';
var ParlamentiPage = /** @class */ (function () {
    function ParlamentiPage(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.items = [
            {
                category: 'Kuvendi',
                items: [
                    { title: 'Historiku', component: HistorikuModal, type: 'Modal' },
                    { title: 'Drejtuest ne Vite', component: DrejtuesModal, type: 'Modal' },
                    { title: 'Ligjevenesit Shqipetare ne vite', component: LigjvenesitModal, type: '' },
                    { title: 'Legjislaturat', component: LegjislaturatModal, type: 'modal' },
                    { title: 'Kushtetuta', component: KushtetutaModal, type: '' },
                    { title: 'Rregullorja', component: RregullorjaModal, type: '' },
                    { title: 'Zgjedhje Parlamentare', component: ZgjedhjeModal, type: 'modal' },
                    { title: 'Funksionet', component: FunksionetModal, type: '' },
                    { title: 'Ndertesa', component: NdertesaModal, type: 'modal' }
                ]
            },
            {
                category: 'Struktura',
                items: [
                    { title: 'Kryetari', component: KryetariModal, type: 'modal' },
                    { title: 'Zevendeskryetaret', component: ZevendesModal, type: 'modal' },
                    { title: 'Byroja e kuvendit', component: ByrojaModal, type: 'modal' },
                    { title: 'Sekretariatet', component: SekretariatetModal, type: 'modal' },
                    { title: 'Konferenca', component: KonferencaModal, type: 'modal' },
                    { title: 'Komisionet', component: KomisionetModal, type: 'modal' },
                    { title: 'Nenkomisionet', component: NenkomisionetModal, type: 'modal' },
                    { title: 'Keshillat', component: KeshillatModal, type: 'modal' },
                    { title: 'Grupet Parlamentare', component: GrupetModal, type: 'modal' }
                ]
            }
        ];
        console.log(this.items);
    }
    ParlamentiPage.prototype.openModal = function (modalItem) {
        var modal = this.modalCtrl.create(modalItem.component);
        modal.present(modalItem.component);
    };
    ParlamentiPage = __decorate([
        Component({
            selector: 'page-parlamenti',
            templateUrl: 'parlamenti.html'
        }),
        __metadata("design:paramtypes", [NavController, ModalController])
    ], ParlamentiPage);
    return ParlamentiPage;
}());
export { ParlamentiPage };
//# sourceMappingURL=parlamenti.js.map