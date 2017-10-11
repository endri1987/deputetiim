import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DeputetetService } from '../../providers/deputetet-service';

@Component({
  selector: 'page-deputeti',
  templateUrl: 'deputeti.html'
})

export class DeputetiPage {

  deputetetList = [];

  constructor(private deputetetService: DeputetetService) {
  	this.getDeputetet();
  }

  getDeputetet() {
  	this.deputetetService.getAll().subscribe(data => this.deputetetList = data); 
  }

}
