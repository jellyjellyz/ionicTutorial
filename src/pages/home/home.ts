import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // define item first
  items: any[];
  constructor(public navCtrl: NavController) {
    this.items = [];
    for (let i = 0; i < 10; i++) {
      this.items.push({
        text: 'Item ' + i,
        id: i
      });
    }
  }
  itemSelected(item) {
    // this.navCtrl using the NavController
    this.navCtrl.push(DetailPage, { 
      // push an instance of our detail page onto the stack
      item: item
    });
  }

}
