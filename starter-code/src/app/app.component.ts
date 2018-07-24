import { Component } from '@angular/core';
import foodsList from './foods'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hide = false;

  title = 'Food List';
  flist = foodsList;
  newFood : Object = {};
  add(){
    this.hide = !this.hide;
  }
  addFood(){
    this.flist.push(this.newFood);
    this.hide = !this.hide;
    console.log('successfully added!');
  }
}
