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
import { Http } from '@angular/http';
import { FormBuilder } from '@angular/forms';
import { DeputetetService } from '../../providers/deputetet-service';
var PyetPage = /** @class */ (function () {
    function PyetPage(navCtrl, builder, toastCtrl, deputetetService, http) {
        this.navCtrl = navCtrl;
        this.builder = builder;
        this.toastCtrl = toastCtrl;
        this.deputetetService = deputetetService;
        this.http = http;
        this.deputetetList = [];
        this.myForm2 = builder.group({
            'emri': '',
            'qyteti': '',
            'email': '',
            'deputeti': '',
            'pyetja': '',
        });
        this.getAll();
    }
    PyetPage.prototype.onFormSubmit = function (formData) {
        if (formData) {
            console.log(formData);
            //  this.myData.email = formData.controls['emri'];
            //  this.myData.email = formData.controls['qyteti'];
            //  this.myData.email = formData.controls['email'];
            // this.myData.pershkrimi = formData.controls['deputeti'];
            // this.myData.mesazhi = formData.controls['pyetja'];
            var headers = new Headers();
            headers.append('Content-Type', 'application/json; charset=utf-8');
            this.http.post('/', JSON.stringify(this.myData), headers)
                .subscribe(function () {
            }, function (err) { return console.error(err); });
        }
    };
    PyetPage.prototype.getAll = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.deputetetService.getAll()
                .then(function (data) {
                _this.deputetetList = data;
            });
        });
    };
    PyetPage = __decorate([
        Component({
            selector: 'page-pyet',
            templateUrl: 'pyet.html'
        }),
        __metadata("design:paramtypes", [NavController,
            FormBuilder,
            ToastController,
            DeputetetService,
            Http])
    ], PyetPage);
    return PyetPage;
}());
export { PyetPage };
//# sourceMappingURL=pyet.js.map