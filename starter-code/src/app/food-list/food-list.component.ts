import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Object[];
  newFoods: Object = {};
  name: string = "";
 

  constructor() { }

  ngOnInit() {
    this.foods = foods;
  }
  
  serchFoods(){
    console.log("hohoh")
    console.log(this.name);
    //this.foods.filter()


    
  }

}

  