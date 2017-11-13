import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PostService } from '../../providers/post-service';
import { ModalController } from 'ionic-angular';
import { SeancatModal } from './modal/smodal';

@Component({
  selector: 'page-seancat',
  templateUrl: 'seancat.html'
})
export class SeancatPage {

  public seancatList: any = [];

  constructor(public navCtrl: NavController, private postService: PostService, private modalCtrl: ModalController) {
  	this.loadSeancat();
  }

  loadSeancat() {
	  return new Promise(resolve => {
      
      this.postService.loadSeancat("Seancat Plenare")
      .then(data => {

        this.seancatList = data;
 
        //console.log(this.seancatList)  	
          
      });
            
    });
  }

  openModal(item) {
    let modal = this.modalCtrl.create(SeancatModal, {item: item});
    modal.present();
  }

}
