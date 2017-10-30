import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PostService } from '../../providers/post-service';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-raporte',
  templateUrl: 'raporte.html'
})
export class RaportePage {

  public raportetList: any = [];

  constructor(public navCtrl: NavController,public iab:InAppBrowser, private postService: PostService) {
    this.loadSeancat();
  }


  loadSeancat() {
	  return new Promise(resolve => {
      
      this.postService.loadSeancat("STUDIME DHE RAPORTE")
      .then(data => {

        this.raportetList = data;
 
        console.log(this.raportetList)  	
          
      });
            
    });
  }

  openPdf(url) {
    let browser = this.iab.create(url);
    browser.show();
  }  
}
