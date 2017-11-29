import { Component, OnInit } from '@angular/core';
import foods from '../foods';
import { FilterPipe } from '../pipes/filter.pipe';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  foodList:Array<object> = [];
  food:object = {};
  today:Array<any> = [];
  calSum:number = 0;
  exist:boolean = false;
  qtyNumber:number = 0;
  index:number = 0;
  isHidden:boolean = true;

  constructor() { }

  ngOnInit() {
    this.foodList = foods;
  }

  show() {
    this.isHidden ? this.isHidden = false : this.isHidden = true;
  }

  addFood(){
    this.foodList.push(this.food);
    this.food = {};
    this.isHidden = true;
  }

  addToToday(food, cal, qty){
    for(let i = 0; i < qty; i++){
      this.today.forEach((f, i) => {
        if(food.name === f.name && !this.exist){
          food.quantity += parseInt(qty);
          this.exist = true;
          console.log(food.quantity);
        }
      });
      this.calSum += cal;
    }

    if(!this.exist){
      this.today.push(food);
    }

    this.exist = false;
  }

}
