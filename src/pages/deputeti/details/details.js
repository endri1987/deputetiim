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
import { NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { FjalimetModal } from '../modals/fjalimetModal';
var DeputetiDetailsPage = /** @class */ (function () {
    function DeputetiDetailsPage(navCtrl, params, modalCtrl) {
        this.navCtrl = navCtrl;
        this.params = params;
        this.modalCtrl = modalCtrl;
        this.deputeti = params.get('item');
        //console.log(this.deputeti);
    }
    DeputetiDetailsPage.prototype.openModal = function () {
        var modal = this.modalCtrl.create(FjalimetModal, { deputeti: this.deputeti });
        modal.present(FjalimetModal);
    };
    DeputetiDetailsPage = __decorate([
        Component({
            selector: 'deputetet-details-page',
            templateUrl: 'ddetails.html'
        }),
        __metadata("design:paramtypes", [NavController, NavParams, ModalController])
    ], DeputetiDetailsPage);
    return DeputetiDetailsPage;
}());
export { DeputetiDetailsPage };
//# sourceMappingURL=details.js.map