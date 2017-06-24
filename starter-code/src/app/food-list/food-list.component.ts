import { Component,  OnInit, Input } from '@angular/core';
import foodList from '../foods';
import { Food } from '../newFood';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})

export class FoodListComponent implements OnInit {

  foods: Object[];
  tFoods: Object[];
  caloriesTodayList: number = 0;
  show : boolean;

  todayFood : Object = {
    name: '',
    calories: 0,
    quantity: 0
  }

  todayFoodList: Object[] = [];

  constructor() { }

  /*********************************************************************************/
  /* appendInputForm()
  /* display the input form after clicking add food button
  /*********************************************************************************/
  appendInputForm() : void {
    this.show = !this.show;
  }

  /*********************************************************************************/
  /* addTodayFood(food : Object, quantity )
  /* add food to the list of foods
  /*********************************************************************************/
  addTodayFood(food : Object, quantity ) : void {
    this.todayFood = { 
      name : food['name'],
      calories : food['calories'],
      quantity: quantity.value
    }
    
    this.todayFoodList.push(this.todayFood);  
    this.todayFoodList.forEach( oneFood => {
      console.log(oneFood['calories']);
    })

  /*********************************************************************************/
  /* Getting the total calories of the today list of food
  /* using map and reduce JavaScript functions in array of Object
  /* map() - dealing only with the values of categories key in the object
  /* reduce() - totaling what mao() returns
  /*********************************************************************************/
    let totalCaloriesTodayList = this.todayFoodList.map((item) => {
      return item['calories'];
    })
    this.caloriesTodayList = totalCaloriesTodayList.reduce((previous, current) => {
      return previous + current;
    })
    console.log(`Total Calories Today Food => ${ totalCaloriesTodayList }`);
    console.log(`Total Calories Today Food => ${ this.caloriesTodayList }`);
  }

  /*********************************************************************************/
  /* addNewFood()
  /* add a new food to the array of foods
  /*********************************************************************************/
  addNewFood( newFood : Food ) : void {
    console.log( newFood );
    this.foods.unshift( newFood );
  }
  

  ngOnInit() {
    this.foods = foodList;
    this.tFoods = this.todayFoodList;
  }

  
  
  
}
