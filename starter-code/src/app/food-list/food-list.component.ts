import { Component, OnInit } from '@angular/core';
import foodList from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Object [];
  myFoodList: any[] = foodList;

  constructor() { }

  ngOnInit() {
    // this.foods = foodList;
  }

//   $(document).ready(function(){
//     $(`#formButton`).click(function(){
//         $(`#form1`).toggle();
//     });
// });

  aNewFood = { theDish: '', theCals: '', image: ''};

  addFood() {
    console.log('submit new foods has been called');
    // add foods to list
    const newFoods = {
      theDish: this.aNewFood.theDish,
      theCals: this.aNewFood.theCals,
      image: this.aNewFood.image
    };
    // clear inputs
    this.foods.unshift(newFoods);
  }
}




