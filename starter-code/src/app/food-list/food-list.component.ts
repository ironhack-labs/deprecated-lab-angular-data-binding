import { Component, OnInit } from '@angular/core';


import foods from '../foods';
import food from './food';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  
  foods: Object[] = foods;
  searched: string = '';
  foodList: Object[] = foods;

  constructor() { }

  ngOnInit() {
  }

  filterFoods(){   
    if(this.searched.length>0){
      this.foodList = this.foods.filter((food: food)=>{
        return food.name.toLowerCase()
                .includes(this.searched.toLowerCase());
      }); 
    } else {
      this.foodList = this.foods; 
    }
  }

}
