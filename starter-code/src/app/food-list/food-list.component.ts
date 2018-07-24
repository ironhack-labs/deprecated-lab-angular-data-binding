import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  listOfToday: Object[] = [];
  constructor() { }

  ngOnInit() {
  }

  food = foods;
  totalCal: number = 0;
  index: number = null;

  addToday(fo, quantity) {
    if (parseInt(quantity) < 1) {
      alert('wrong number!')
    } else {
      if (this.listOfToday.indexOf(fo) != -1) {
        this.listOfToday[this.listOfToday.indexOf(fo)]['quantity'] += parseInt(quantity);
      } else {
        fo.quantity = parseInt(quantity);
        this.listOfToday.push(fo);
      }
      this.totalCal += fo.calories * quantity;
    }
  }
}


