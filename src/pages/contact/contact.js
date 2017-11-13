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
import { Http } from '@angular/http';
import { FormBuilder } from '@angular/forms';
var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl, builder, http) {
        this.navCtrl = navCtrl;
        this.builder = builder;
        this.http = http;
        this.myForm = builder.group({
            'email': '',
            'subject': '',
            'message': ''
        });
    }
    ContactPage.prototype.onSubmit = function (formData) {
        console.log(formData);
        this.myData.email = formData.controls['email'];
        this.myData.pershkrimi = formData.controls['pershkrimi'];
        this.myData.mesazhi = formData.controls['mesazhi'];
        var headers = new Headers();
        headers.append('Content-Type', 'application/json; charset=utf-8');
        this.http.post('/', JSON.stringify(this.myData), headers)
            .subscribe(function () {
        }, function (err) { return console.error(err); });
    };
    ContactPage = __decorate([
        Component({
            selector: 'page-contact',
            templateUrl: 'contact.html'
        }),
        __metadata("design:paramtypes", [NavController,
            FormBuilder,
            Http])
    ], ContactPage);
    return ContactPage;
}());
export { ContactPage };
//# sourceMappingURL=contact.js.map