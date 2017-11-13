import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PostService } from '../../../providers/post-service';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'lista-grate',
  templateUrl: 'lista-grate.html'
})
export class ListaGrateModal {

  public grateList: any = [];

  constructor(public navCtrl: NavController, private postService: PostService, public viewCtrl: ViewController) {
    this.loadSeancat();
  }

  loadSeancat() {
    return new Promise(resolve => {
      
      this.postService.loadSeancat("GRATE DEPUTETE")
      .then(data => {
        
        for(let key in data){
          var item = {};
          item = data[key];
          
          if (data[key]){
            this.grateList.push(item);
          }
        }
        //console.log(this.grateList); 
      });  
    });
  } 

  dismiss() {
    this.viewCtrl.dismiss();
  } 
}