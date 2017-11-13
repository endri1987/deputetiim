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
import { NavController, ToastController } from 'ionic-angular';
import { PostService } from '../../providers/post-service';
import { DetailsPage } from '../details/details';
var FindsPage = /** @class */ (function () {
    function FindsPage(navCtrl, postService, toastCtrl) {
        this.navCtrl = navCtrl;
        this.postService = postService;
        this.toastCtrl = toastCtrl;
        this.postsList = [];
        this.start = 0;
        this.loadPosts();
    }
    FindsPage.prototype.loadPosts = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.postService.load(_this.start, 105)
                .then(function (data) {
                var dataArr = Object.keys(data).map(function (key) { return data[key]; });
                if (dataArr.length > 0) {
                    for (var _i = 0, dataArr_1 = dataArr; _i < dataArr_1.length; _i++) {
                        var post = dataArr_1[_i];
                        _this.postsList.push(post);
                    }
                    resolve(true);
                }
                else {
                    var toast = _this.toastCtrl.create({
                        message: 'Nuk ka me Gjetje',
                        duration: 2000
                    });
                    toast.present();
                    resolve();
                }
            });
        });
    };
    FindsPage.prototype.doInfinite = function (infiniteScroll) {
        console.log('doInfinite, start is currently ' + this.start);
        this.start += 15;
        this.loadPosts().then(function () {
            infiniteScroll.complete();
        });
    };
    FindsPage.prototype.viewPost = function (post) {
        this.navCtrl.push(DetailsPage, {
            item: post
        });
    };
    FindsPage = __decorate([
        Component({
            selector: 'page-finds',
            templateUrl: 'finds.html'
        }),
        __metadata("design:paramtypes", [NavController,
            PostService,
            ToastController])
    ], FindsPage);
    return FindsPage;
}());
export { FindsPage };
//# sourceMappingURL=finds.js.map