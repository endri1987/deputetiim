import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  myForm: FormGroup;
  private myData: any;

  constructor(
    private navCtrl: NavController,
    private builder: FormBuilder,
    private http:Http) {
    this.myForm = builder.group({
      'email': '',
      'subject': '',
      'message': ''
    })
  }

  onSubmit(formData) {
    console.log(formData);
    this.myData.email = formData.controls['email'];
    this.myData.pershkrimi = formData.controls['pershkrimi'];
    this.myData.mesazhi = formData.controls['mesazhi'];
    

    let headers = new Headers();

    headers.append(
        'Content-Type',
        'application/json; charset=utf-8'
      );

    this.http.post('/', JSON.stringify(this.myData), headers)
      .subscribe(
        () => {

          },
        err => console.error(err)    
      );         
  }

}



