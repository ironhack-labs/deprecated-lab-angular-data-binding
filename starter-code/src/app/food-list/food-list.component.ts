import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  items: Object[];
  newItem: Object = {};
  search: string;
  show: boolean = false;
  myList: Array<string> = [];
  totalCalories: number = 0;
  quantity: number = 1;
  constructor() { }

  ngOnInit() {
    this.items = foods;
  }
  showList(){
    this.show = !this.show;
  }

  addNewItem(){
    this.items.push(this.newItem);
  }
l
  addToList(i,quantity){
    let item = this.items[i];
    this.items[i]['quantity'] += Number(quantity);
    this.totalCalories =0;
    this.myList = [];
    for (let x= 0; x < this.items.length; x++){
      this.totalCalories += this.items[x]['calories'] * this.items[x]['quantity'];
      if (this.items[x]['quantity'] > 1){
        this.myList.push(this.items[x]['name']+" x"+this.items[x]['quantity']);
      } else if (this.items[x]['quantity'] === 1) {
        this.myList.push(this.items[x]['name']);
      }
    }
  }
}
