import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import {Observable} from  'rxjs/Observable';

@Injectable()
export class DeputetetService {

  private url: string = "http://deputetim.al/service/index.php/deputetet"

  constructor(private http:Http) {
  	//console.log('servisi i deputeteve');
  }

  getAll() {
  	return this.http.get(this.url+'?action="getAll"')
  	.do((res: Response) => console.log(res))
  	.map((res: Response) => res.json())

  }



}
