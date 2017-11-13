import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { PostService } from '../../../../providers/post-service';

@Component({
  selector: 'modal-drejtues',
  templateUrl: 'drejtues.html'
})

export class DrejtuesModal {

  public drejtuesList: any = [];	

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, private postService: PostService) { 
    this.loadSeancat();
  }

  loadSeancat() {
	  return new Promise(resolve => {
      
      this.postService.loadSeancat("PARLAMENTI IM", 'Drejtues ne vite')
      .then(data => {

        this.drejtuesList = data;
 
        console.log(this.drejtuesList)  	
          
      });
            
    });
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}