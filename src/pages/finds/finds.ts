import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController } from 'ionic-angular';
import { PostService } from '../../providers/post-service';
import { DetailsPage } from '../details/details';

@Component({
  selector: 'page-finds',
  templateUrl: 'finds.html'
})

export class FindsPage {

  public postsList: any = [];
  private start:number = 0;
  private loader: any;

  constructor(
    private navCtrl: NavController, 
    private postService: PostService, 
    private toastCtrl: ToastController,
    private loadtCtrl: LoadingController) {

  	this.loadPosts();
    this.loader = this.loadtCtrl.create({
      duration: 1500
    });
    this.loader.present();
  }

  loadPosts() {
    
    return new Promise(resolve => {

    this.postService.load(this.start, 105)
    .then(data => {

      var dataArr = Object.keys(data).map(function (key) { return data[key]; });

      if (dataArr.length > 0) {
        for (let post of dataArr) {
        this.postsList.push(post);
        }

        resolve(true);
      } else {
        let toast = this.toastCtrl.create({
          message: 'Nuk ka me Gjetje',
          duration: 2000
        });	

        toast.present();
        resolve(false);
      }  

    });
    });
  }  

  doInfinite(infiniteScroll: any) {
  	
  	console.log('doInfinite, start is currently '+this.start);
  	this.start += 15;

  	this.loadPosts()
  	.then((promise)=>{
      if (promise) {
  		  infiniteScroll.complete();
  	  } else {
        infiniteScroll.enable(false);
      }
    }) 
  }

  viewPost(post) {
  	this.navCtrl.push(DetailsPage, {
  		item: post
  	})
  }

 //  infiniteScroll(ev) {
	// this.pagination++;
	// if (this.type === false) {
	// 	this.postService.index(1).subscribe(data => {
	// 		ev.complete();
	// 		if (data.json().length === 0) {
	// 			let toast = this.toastCtrl.create({
	// 				message: 'Nuk ka me Gjetje',
	// 				duration: 2000
	// 			});
	// 			toast.present()
	// 		} else {
	// 			for (let i of data.json()) {
	// 				this.postsList.push(i);
	// 			}
	// 		}
	// 	});
	// } else {

	// }	
 //  }
}
