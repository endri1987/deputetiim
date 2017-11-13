import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PostService } from '../../../providers/post-service';
import { ModalController } from 'ionic-angular';
import { LigjiDetails } from '../details/ligjidetails';

@Component({
  selector: 'miratim',
  templateUrl: 'miratim.html'
})
export class MiratimModal {

  public ligjetList: any = [];

  constructor(public navCtrl: NavController, private postService: PostService, private modalCtrl: ModalController) {
  	this.loadSeancat();
  }

  loadSeancat() {
	  return new Promise(resolve => {
      
      this.postService.loadSeancat("LIGJET E MIRATUARA")
      .then(data => {
        for(let key in data){
          var item = {};
          item = data[key];
          
          if (data[key]){
            this.ligjetList.push(item);
          }
        } 	
          
      });
            
    });
  }
  
  openModal(item) {
    let modal = this.modalCtrl.create(LigjiDetails, {item: item});
    modal.present();
  }
}