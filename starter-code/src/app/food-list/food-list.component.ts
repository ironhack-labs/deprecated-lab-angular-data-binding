import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  foods:Object[];
  pattern: String;

  visible: boolean;

  name: string;
  calories: number;
  image : string;

  constructor() {
    this.foods = foods;
    this.visible = false;
    
   }

  ngOnInit() {
  }

  showForm(){
    this.visible = !this.visible
  }

  addFood(){
    this.foods.push({
      name : this.name,
      calories : this.calories,
      image: this.image
    })
  }
 
}
