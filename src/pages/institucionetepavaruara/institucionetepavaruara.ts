import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PostService } from '../../providers/post-service';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-institucionetepavaruara',
  templateUrl: 'institucionetepavaruara.html'
})
export class InstitucionetPavaruaraPage {

  institucionetList: any;	

  constructor(public navCtrl: NavController, private postService: PostService, public iab:InAppBrowser) {
  	this.loadSeancat();
  }

  loadSeancat() {
	  return new Promise(resolve => {
      
      this.postService.loadSeancat("INSTITUCIONET PARLAMENTARE")
      .then(data => {
        console.log(data);
        this.institucionetList = data;        
      });
            
    });
  }

  openPdf(url) {
    let browser = this.iab.create(url);
    browser.show();
  }  
}
