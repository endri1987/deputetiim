import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { PostService } from '../../providers/post-service';
import { KclapdnModal } from './modals/kclapdn/kclapdn';


@Component({
  selector: 'page-komisionet',
  templateUrl: 'komisionet.html'
})
export class KomisionetPage {

  komisionetList: any;	

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, private postService: PostService) {
    this.loadSeancat();
  }

  loadSeancat() {
	  return new Promise(resolve => {
      
      this.postService.loadSeancat("KOMISIONET PARLAMENTARE")
      .then(data => {
        console.log(data);
        this.komisionetList = data;        
      });
            
    });
  }

  openModal(item) {
    let modal = this.modalCtrl.create(KclapdnModal, {item: item});
    modal.present(KclapdnModal);
  }

}
