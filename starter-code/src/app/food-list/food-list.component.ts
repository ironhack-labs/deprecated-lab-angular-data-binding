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
    quantity: 0,
    amountClicked: 0
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
      quantity: quantity.value,
      amountClicked: 1
    }
    
    // first check if todayFoodList is empty if so, push first food selected
    if ( this.todayFoodList.length === 0 ) {
      this.todayFoodList.push(this.todayFood);
      this.caloriesTodayList = getTotalCalories(this.todayFoodList);

      this.todayFoodList.forEach((oneFood) => {
        console.log(oneFood['amountClicked']);
      })

      // if todayFoodList has at least one element then check if food already exists
      // if food exists doesn't push it again, so updated the amountClicked value,
      // and updated the number of calories multiplying by the amountClicked value.
    } else {
      console.log(checkDuplicateFood(this.todayFoodList, this.todayFood['name']))
      if (checkDuplicateFood(this.todayFoodList, this.todayFood['name'])) {
        this.todayFoodList.forEach((oneFood) => {
          if (oneFood['name'] === this.todayFood['name']) {
            oneFood['amountClicked']++;
            console.log(oneFood['amountClicked'])

            // this is to updated calories if the food is clicked more than one
            // I will comment out because is not a requirement
            // oneFood['calories'] = oneFood['calories'] * oneFood['amountClicked'];
            // oneFood['quantity']++;
            // this.caloriesTodayList = getTotalCalories(this.todayFoodList);
          }
        })
      } else {
        this.todayFoodList.push(this.todayFood);
        this.caloriesTodayList = getTotalCalories(this.todayFoodList);
      }
    }
    
    
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
}// FoodListComponent ends

  /*********************************************************************************/
  /* getTotalCalories( todayFoodList : Object[] )
  /* Getting the total calories of the today list of food
  /* using map and reduce JavaScript functions in array of Object
  /* map() - dealing only with the values of categories key in the object
  /* reduce() - totaling what mao() returns
  /*********************************************************************************/
function getTotalCalories( todayFoodList : Object[] ) : number{

  let totalCaloriesTodayList = todayFoodList.map((item) => {
    return item['calories'];
  })
  
  let caloriesTodayList = totalCaloriesTodayList.reduce((previous, current) => {
    return previous + current;
  })

  console.log(`Total Calories Today Food => ${ totalCaloriesTodayList }`);
  console.log(`Total Calories Today Food => ${ caloriesTodayList }`);

  return caloriesTodayList;
}

/*********************************************************************************/
  /* checkDuplicateFood(arr, val)
  /* checks if the food added already exists in the array of today food list
  /*******************************************************************************/
function checkDuplicateFood(arr, val) {
  return arr.some(function(e) {
        return e.name === val;
  });
}