import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

    myForm: FormGroup;
  private myData: any;
  constructor(private navCtrl: NavController, private builder: FormBuilder) {
    this.myForm = builder.group({
      'subject': '',
      'message': ''
    })
  }

  onSubmit(formData) {
    console.log('Form data is ', formData);
    this.myData = formData;
  }

}



