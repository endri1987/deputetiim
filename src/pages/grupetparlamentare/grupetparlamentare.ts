import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { PostService } from '../../providers/post-service';
import { GrupiModal } from './modal/grupiModal';

@Component({
  selector: 'page-grupetparlamentare',
  templateUrl: 'grupetparlamentare.html'
})
export class GrupetParlamentarePage {

  grupetList: any;	

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, private postService: PostService) {
    this.loadSeancat();
  }

  loadSeancat() {
	  return new Promise(resolve => {
      
      this.postService.loadSeancat("GRUPET PARLAMENTARE")
      .then(data => {
        //console.log(data);
        this.grupetList = data;        
      });
            
    });
  }

  openModal(item) {
    let modal = this.modalCtrl.create(GrupiModal, {item: item});
    modal.present(GrupiModal);
  }

}
