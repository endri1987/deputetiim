import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { PostService } from '../../providers/post-service';

@Component({
  selector: 'page-publications',
  templateUrl: 'publications.html'
})
export class PublicationsPage {

  public publikimetList: any = [];

  constructor(public navCtrl: NavController, public iab:InAppBrowser, private postService: PostService) {
  	this.loadSeancat();
  }

  loadSeancat() {
	  return new Promise(resolve => {
      
      this.postService.loadSeancat("publikime")
      .then(data => {

        this.publikimetList = data;
 
        //console.log(this.publikimetList)  	
          
      });
            
    });
  }

  openPdf(url) {
  	let browser = this.iab.create(url);
  	browser.show();
  }
}