import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { PostService } from '../../../../providers/post-service';

@Component({
  selector: 'modal-legjislaturat',
  templateUrl: 'legjislaturat.html'
})

export class LegjislaturatModal {

  public legjislaturatList: any = [];	

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, private postService: PostService) { 
  	this.loadSeancat();
  }

  loadSeancat() {
	  return new Promise(resolve => {
      
      this.postService.loadSeancat("PARLAMENTI IM", 'Legjislaturat')
      .then(data => {

        this.legjislaturatList = data;
 
        console.log(this.legjislaturatList)  	
          
      });
            
    });
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}