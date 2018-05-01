import { Component, OnInit } from '@angular/core';
import foods from '../foods';


@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Object[];
  pattern: string;
  isHidden: boolean;
  todaysFood: Object[];
  dailyCaloryIntake: number;


  constructor() {
    this.isHidden=true;
   }

  ngOnInit() {
    this.foods=foods;
    this.todaysFood=[];
    this.dailyCaloryIntake=0;
    
  }

  addFood(name, calories,image){
    this.foods.unshift({
      name,
      calories,
      image,
    });
    //this.foods.push(foods);
    this.isHidden= true;
}


showForm():void {
  this.isHidden=false;

}

addTodaysFood(f){
  this.todaysFood.push(f);
  this.dailyCaloryIntake += f.calories;
 
}

}
