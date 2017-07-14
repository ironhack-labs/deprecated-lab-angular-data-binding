import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Object[] = foods;
  newProduct: object = {};
  newFoodList: any[] = [];
  daily: any[] = [];
  showForm: boolean = false;
  quantity: number = 0;
  totalCal: number = 0;
  todayQty: number = 0;
  todayArray: any = [];
  constructor() { }

  ngOnInit() {
  }
  toggleView() {
    if (this.showForm) {
      this.showForm = false;
    } else {
      this.showForm = true;
    }
  }

  addProduct() {
      this.foods.push(this.newProduct);
      this.showForm = false;
  }

  addToToday(product, qty) {

      this.totalCal += qty * product.calories;
      if (this.todayArray.length < 1) {
        product.qty = qty;
        this.todayArray.push(product);
        return this.todayArray;
      }
        for (let i = 0; i < this.todayArray.length; i++) {
          if (this.todayArray[i].name === product.name) {
            this.todayArray[i].qty += qty;
          }
          else if (i === this.todayArray.length-1 && this.todayArray[i].name !== product.name) {
            product.qty = qty;
            this.todayArray.push(product);
          }
        }
return this.todayArray;
  }
}
