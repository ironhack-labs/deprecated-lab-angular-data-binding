import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  constructor(private foodService: FoodService) {}

  ngOnInit() {}

  filter(value) {
    this.foodService.searchFood(value);
  }

  
}


// // Old Code 
// import { Component, OnInit } from '@angular/core';
// import foods from '../foods';

// @Component({
//   selector: 'app-food-list',
//   templateUrl: './food-list.component.html',
//   styleUrls: ['./food-list.component.css']
// })
// export class FoodListComponent implements OnInit {
//   foodsList:Array<any>;
//   todaysFoodsList:Array<any>;
//   totalCalories:number = 0;

//   constructor() {
//   }

//   ngOnInit() {
//     this.foodsList = foods;
//     this.todaysFoodsList = [];
//   }

//   onKey(value) {
//     this.foodsList = foods;
//     let tempArray = [];
//     this.foodsList.forEach(food => {
//       if (food.name.toLowerCase().includes(value.toLowerCase())) {
//         tempArray.push(food);
//       }
//     });
//     this.foodsList = tempArray;
//   }

//   addFood(newName, newCalories, newImage) {
//     this.foodsList.push({
//       name: newName.value,
//       calories: newCalories.value,
//       image: newImage.value,
//       quantity: 0
//     });
    
//     newName.value = '';
//     newCalories.value = '';
//     newImage.value = '';
//   }

//   addFoodOfDay(dayFood) {
//     this.todaysFoodsList.push(dayFood);
//     this.totalCalories += Number(dayFood.calories);
//   }
// }