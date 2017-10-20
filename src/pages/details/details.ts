import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'details-page',
  templateUrl: 'details.html'
})
export class DetailsPage {
  post: any; 
  constructor(public navCtrl: NavController, public params: NavParams ) {
    this.post = params.get('item');
    console.log(this.post);
  }

}
