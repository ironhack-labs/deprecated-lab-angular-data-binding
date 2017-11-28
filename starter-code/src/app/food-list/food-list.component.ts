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
  today:Array<string> = [];
  calSum:number = 0;
  qtyNumber:number = 1;
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

  addToToday(name, cal, qty){
    for(let i = 0; i < qty; i++){
      this.today.push(name);
      this.calSum += cal;
    }
    console.log(this.qtyNumber);
  }

}
