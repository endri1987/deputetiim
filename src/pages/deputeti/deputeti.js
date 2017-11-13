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
import { NavController, LoadingController, ToastController } from 'ionic-angular';
import { DeputetetService } from '../../providers/deputetet-service';
import { DeputetiDetailsPage } from './details/details';
var DeputetiPage = /** @class */ (function () {
    function DeputetiPage(navCtrl, toastCtrl, deputetetService, loadtCtrl) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.deputetetService = deputetetService;
        this.loadtCtrl = loadtCtrl;
        this.deputetetList = [];
        this.start = 0;
        this.flag = 0;
        this.loadPosts();
        this.loader = this.loadtCtrl.create({
            duration: 5000
        });
        this.loader.present();
    }
    DeputetiPage.prototype.loadPosts = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.deputetetService.load(_this.start, 105)
                .then(function (data) {
                var dataArr = Object.keys(data).map(function (key) { return data[key]; });
                if (dataArr.length > 0) {
                    for (var _i = 0, dataArr_1 = dataArr; _i < dataArr_1.length; _i++) {
                        var post = dataArr_1[_i];
                        _this.deputetetList.push(post);
                    }
                    resolve(true);
                }
                else {
                    var toast = _this.toastCtrl.create({
                        message: 'Nuk ka me deputet',
                        duration: 2000
                    });
                    toast.present();
                    resolve(false);
                }
            });
        });
    };
    DeputetiPage.prototype.doInfinite = function (infiniteScroll) {
        this.start += 5;
        this.loadPosts()
            .then(function (promise) {
            if (promise) {
                infiniteScroll.complete();
            }
            else {
                infiniteScroll.enable(false);
            }
            //this.loader.present();
        });
    };
    DeputetiPage.prototype.viewPost = function (deputeti) {
        this.navCtrl.push(DeputetiDetailsPage, {
            item: deputeti
        });
    };
    DeputetiPage.prototype.filterItems = function (ev) {
        var _this = this;
        var val = ev.target.value;
        if (this.flag === 0) {
            this.list = this.deputetetList;
            this.flag = 1;
        }
        if (this.flag === 1 && val.length < 1) {
            this.deputetetList = this.list;
            this.flag = 0;
        }
        return new Promise(function (resolve) {
            _this.deputetetService.filterByName(val)
                .then(function (data) {
                _this.deputetetList = data;
            });
        });
    };
    DeputetiPage = __decorate([
        Component({
            selector: 'page-deputeti',
            templateUrl: 'deputeti.html'
        }),
        __metadata("design:paramtypes", [NavController,
            ToastController,
            DeputetetService,
            LoadingController])
    ], DeputetiPage);
    return DeputetiPage;
}());
export { DeputetiPage };
//# sourceMappingURL=deputeti.js.map