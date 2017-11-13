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
import { PostService } from '../../../providers/post-service';
import { ModalController } from 'ionic-angular';
var MiratimModal = /** @class */ (function () {
    function MiratimModal(navCtrl, postService, modalCtrl) {
        this.navCtrl = navCtrl;
        this.postService = postService;
        this.modalCtrl = modalCtrl;
        this.ligjetList = [];
        this.loadSeancat();
    }
    MiratimModal.prototype.loadSeancat = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.postService.loadSeancat("Seancat Plenare")
                .then(function (data) {
                _this.ligjetList = data;
                console.log(_this.ligjetList);
            });
        });
    };
    MiratimModal.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    MiratimModal = __decorate([
        Component({
            selector: 'miratim-modal',
            templateUrl: 'miratim.html'
        }),
        __metadata("design:paramtypes", [NavController, PostService, ModalController])
    ], MiratimModal);
    return MiratimModal;
}());
export { MiratimModal };
//# sourceMappingURL=miratim.js.map