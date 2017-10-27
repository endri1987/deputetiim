import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'deputetet-details-page',
  templateUrl: 'ddetails.html'
})
export class DeputetiDetailsPage {
  deputeti: any; 
  constructor(public navCtrl: NavController, public params: NavParams ) {
    this.deputeti = params.get('item');
    console.log(this.deputeti);
  }

}
