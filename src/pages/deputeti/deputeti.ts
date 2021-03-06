import { Component } from '@angular/core';
import { NavController, LoadingController ,ToastController } from 'ionic-angular';
import { DeputetetService } from '../../providers/deputetet-service';
import { DeputetiDetailsPage } from './details/details';

@Component({
  selector: 'page-deputeti',
  templateUrl: 'deputeti.html'
})

export class DeputetiPage {

  public deputetetList: any = [];
  private loader: any;
  private start:number = 0;
  private flag: number = 0;
  private list: any;

  constructor(
    private navCtrl: NavController, 
    private toastCtrl: ToastController,
    private deputetetService: DeputetetService,
    private loadtCtrl: LoadingController ) {
  	this.loadPosts();
    this.loader = this.loadtCtrl.create({
      duration: 5000
    });
    this.loader.present();
  }

  loadPosts() {
    
    return new Promise(resolve => {

    this.deputetetService.load(this.start, 105)
    .then(data => {

      var dataArr = Object.keys(data).map(function (key) { return data[key]; });

      if (dataArr.length > 0) {
        for (let post of dataArr) {
        this.deputetetList.push(post);
        }

        resolve(true);
      } else {
        let toast = this.toastCtrl.create({
          message: 'Nuk ka me deputet',
          duration: 2000
        });	

        toast.present();
        resolve(false);
      }  

    });
    });
  } 

  doInfinite(infiniteScroll: any) {
    
    this.start += 5;

    this.loadPosts()
    .then((promise)=>{
      if (promise) {
        infiniteScroll.complete();
      } else {
        infiniteScroll.enable(false);
      }
      //this.loader.present();
    }) 
  }

  viewPost(deputeti) {
    this.navCtrl.push(DeputetiDetailsPage, {
      item: deputeti
    })
  }

  filterItems(ev: any) {

    let val = ev.target.value;

    if (this.flag === 0) {
      this.list = this.deputetetList;
      this.flag = 1;
    }

    if (this.flag === 1 && val.length < 1 ) {
      this.deputetetList = this.list;
      this.flag = 0;
    }    
    return new Promise(resolve => {
      this.deputetetService.filterByName(val)
      .then(data => {

        this.deputetetList = data;

      });
    });
  }

}
