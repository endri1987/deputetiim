import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { Http } from '@angular/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DeputetetService } from '../../providers/deputetet-service';

@Component({
  selector: 'page-pyet',
  templateUrl: 'pyet.html'
})
export class PyetPage {

  myForm2: FormGroup;
  private myData: any;
  public deputetetList: any = [];

  constructor(
    private navCtrl: NavController,
    private builder: FormBuilder,
    private toastCtrl: ToastController,
    private deputetetService: DeputetetService,
    private http:Http) {
    this.myForm2 = builder.group({
      'emri': '',
      'qyteti': '',
      'email': '',
      'deputeti': '',
      'pyetja': '',
    });
    this.getAll();
  }

	onFormSubmit(formData) {
    console.log(formData);  
   //  this.myData.email = formData.controls['emri'];
   //  this.myData.email = formData.controls['qyteti'];
   //  this.myData.email = formData.controls['email'];
  	// this.myData.pershkrimi = formData.controls['deputeti'];
  	// this.myData.mesazhi = formData.controls['pyetja'];

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

  getAll() {
    return new Promise(resolve => {
      this.deputetetService.getAll()
      .then(data => {

        this.deputetetList = data;

      });
    }); 
  }
}
