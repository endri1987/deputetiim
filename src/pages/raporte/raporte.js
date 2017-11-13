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
import { PostService } from '../../providers/post-service';
import { InAppBrowser } from '@ionic-native/in-app-browser';
var RaportePage = /** @class */ (function () {
    function RaportePage(navCtrl, iab, postService) {
        this.navCtrl = navCtrl;
        this.iab = iab;
        this.postService = postService;
        this.raportetList = [];
        this.loadSeancat();
    }
    RaportePage.prototype.loadSeancat = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.postService.loadSeancat("STUDIME DHE RAPORTE")
                .then(function (data) {
                _this.raportetList = data;
                console.log(_this.raportetList);
            });
        });
    };
    RaportePage.prototype.openPdf = function (url) {
        var browser = this.iab.create(url);
        browser.show();
    };
    RaportePage = __decorate([
        Component({
            selector: 'page-raporte',
            templateUrl: 'raporte.html'
        }),
        __metadata("design:paramtypes", [NavController, InAppBrowser, PostService])
    ], RaportePage);
    return RaportePage;
}());
export { RaportePage };
//# sourceMappingURL=raporte.js.map