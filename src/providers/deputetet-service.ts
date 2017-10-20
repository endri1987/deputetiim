import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from  'rxjs/Observable';

@Injectable()
export class DeputetetService {

  private url: string = "http://deputetim.al/service/index.php/deputetet"
  perpage:number = 20;

  constructor(private http:Http) {
  	//console.log('servisi i postave');
  }

  load(start:number = 0, id) {
  	return new Promise(resolve => {
	  	this.http.get(this.url+'?action=getAll&limit='+this.perpage+'&offset='+start)
	    .map((res) => res.json())
	  	.subscribe(data => {
	  		
	      resolve(data);

	    });
	  });  
  }



}
