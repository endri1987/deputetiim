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
import { KclapdnModal } from './modals/kclapdn/kclapdn';
import { KIntegrimModal } from './modals/kintegrim/kintegrim';
import { KPJashtModal } from './modals/kpjasht/kpjasht';
import { KEkonomiModal } from './modals/kekonomi/kekonomi';
import { KSiguriModal } from './modals/ksiguri/ksiguri';
import { KTregtiModal } from './modals/ktregti/ktregti';
import { KPuneModal } from './modals/kpune/kpune';
import { KEdukimModal } from './modals/kedukim/kedukim';
import { NenkomisionetModal2 } from './modals/nenkomisionet/nenkomisionet';
var KomisionetPage = /** @class */ (function () {
    function KomisionetPage(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.items = [
            {
                category: 'Komisionet e perhershme',
                items: [
                    { title: 'Komisioni për Çështjet Ligjore, Administratën Publike dhe të Drejtat e Njeriut', component: KclapdnModal, type: 'modal' },
                    { title: 'Komisioni për Integrimin Europian', component: KIntegrimModal, type: 'modal' },
                    { title: 'Komisioni për Politikën e Jashtme', component: KPJashtModal, type: 'modal' },
                    { title: 'Komisioni për Ekonominë dhe Financat', component: KEkonomiModal, type: 'modal' },
                    { title: 'Komisioni për Sigurinë Kombëtare', component: KSiguriModal, type: 'modal' },
                    { title: 'Komisioni për Veprimtaritë Prodhuese, Tregtinë dhe Mjedisin', component: KTregtiModal, type: 'modal' },
                    { title: 'Komisioni për Punën, Çështjet Sociale', component: KPuneModal, type: 'modal' },
                    { title: 'Komisioni për Edukimin dhe Mjetet e Informimit Publik', component: KEdukimModal, type: 'modal' },
                    { title: 'Nenkomisionet', component: NenkomisionetModal2, type: 'modal' }
                ]
            },
            {
                category: 'Komisionet e Posacme',
                items: []
            },
            {
                category: 'Komisionet Hetimore',
                items: []
            }
        ];
    }
    KomisionetPage.prototype.openModal = function (modalItem) {
        var modal = this.modalCtrl.create(modalItem);
        modal.present(modalItem);
    };
    KomisionetPage = __decorate([
        Component({
            selector: 'page-komisionet',
            templateUrl: 'komisionet.html'
        }),
        __metadata("design:paramtypes", [NavController, ModalController])
    ], KomisionetPage);
    return KomisionetPage;
}());
export { KomisionetPage };
//# sourceMappingURL=komisionet.js.map