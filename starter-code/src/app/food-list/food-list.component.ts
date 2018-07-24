import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
 
  food: Object[];
  isHidden:Boolean=false;

  toggleHidden(e){
    this.isHidden=!this.isHidden;
  }

  constructor() { }

  ngOnInit() {
    this.food=foods;
  }


  addFood(fName, fImage, fCalorie){

 let newFood={name: fName.value,image:fImage.value,calories:fCalorie.value}
  this.food.push(newFood);
  fName.value="";
  fImage.value=""; 
  fCalorie.value="";
}
}
