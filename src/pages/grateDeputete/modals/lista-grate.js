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
import { ViewController } from 'ionic-angular';
var ListaGrateModal = /** @class */ (function () {
    function ListaGrateModal(navCtrl, postService, viewCtrl) {
        this.navCtrl = navCtrl;
        this.postService = postService;
        this.viewCtrl = viewCtrl;
        this.grateList = [];
        this.loadSeancat();
    }
    ListaGrateModal.prototype.loadSeancat = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.postService.loadSeancat("GRATE DEPUTETE")
                .then(function (data) {
                for (var key in data) {
                    var item = {};
                    item = data[key];
                    if (data[key]) {
                        _this.grateList.push(item);
                    }
                }
                //console.log(this.grateList); 
            });
        });
    };
    ListaGrateModal.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ListaGrateModal = __decorate([
        Component({
            selector: 'lista-grate',
            templateUrl: 'lista-grate.html'
        }),
        __metadata("design:paramtypes", [NavController, PostService, ViewController])
    ], ListaGrateModal);
    return ListaGrateModal;
}());
export { ListaGrateModal };
//# sourceMappingURL=lista-grate.js.map