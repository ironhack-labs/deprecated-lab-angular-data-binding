import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods = foods;
  newFood: Object = {};
  isPresent: boolean = false;
  foodDuJour: any = [];
  constructor() { }

  ngOnInit() {
  }
  //Toggle Form to Display
  formToggle(){
    if(this.isPresent ===false){
      this.isPresent = true;
    }
    else {
      this.isPresent = false;
    }
  }
  //Form Button - Add a New Food
  addFood(){
    console.log("Food Added Successfully");
    this.foods.push(this.newFood);
  }

//Add to Today's Food
  foodToday(food, amount){
      this.foodDuJour.push(food);
      console.log('Attention! Attention New Food Addded:');
      console.log(this.foodDuJour);
  }

}
