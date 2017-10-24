import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { PostService } from '../../providers/post-service';


@Component({
  selector: 'page-finds',
  templateUrl: 'finds.html'
})

export class FindsPage {

  public postsList: any = [];

  private start:number = 0;

  constructor(private postService: PostService, private toastCtrl: ToastController) {
  	this.loadPosts();
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
					resolve()
		    }  
	        
	    });
            
  	});
  }  

  doInfinite(infiniteScroll: any) {
     console.log('doInfinite, start is currently '+this.start);
     this.start += 15;
     
     this.loadPosts().then(()=>{
       infiniteScroll.complete();
     });
     
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
