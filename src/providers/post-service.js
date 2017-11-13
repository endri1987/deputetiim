var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
var PostService = /** @class */ (function () {
    function PostService(http) {
        this.http = http;
        this.url = "http://deputetim.al/service/index.php/posts";
        this.perpage = 20;
        //console.log('servisi i postave');
    }
    PostService.prototype.load = function (start, id) {
        var _this = this;
        if (start === void 0) { start = 0; }
        return new Promise(function (resolve) {
            _this.http.get(_this.url + '?action=getByCategory&category=105&limit=' + _this.perpage + '&offset=' + start)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    PostService.prototype.loadSeancat = function (title) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.url + '?action=getByTitle&title=' + title)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    PostService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Http])
    ], PostService);
    return PostService;
}());
export { PostService };
//# sourceMappingURL=post-service.js.map