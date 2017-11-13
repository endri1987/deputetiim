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
import { ViewController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
var FjalimetModal = /** @class */ (function () {
    function FjalimetModal(navCtrl, iab, params, viewCtrl) {
        this.navCtrl = navCtrl;
        this.iab = iab;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.deputeti = params.get('deputeti');
        console.log(this.deputeti);
    }
    FjalimetModal.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    FjalimetModal.prototype.openPdf = function (url) {
        var browser = this.iab.create(url);
        browser.show();
    };
    FjalimetModal = __decorate([
        Component({
            selector: 'modal-fjalimet',
            templateUrl: 'fjalimetModal.html'
        }),
        __metadata("design:paramtypes", [NavController, InAppBrowser, NavParams, ViewController])
    ], FjalimetModal);
    return FjalimetModal;
}());
export { FjalimetModal };
//# sourceMappingURL=fjalimetModal.js.map