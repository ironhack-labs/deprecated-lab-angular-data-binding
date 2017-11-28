import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foodList: Array<Object>;
  visible : boolean =false;
  newFood: Object={};

  showAddForm(){
    this.visible=!this.visible;
    console.log("Show form change to: "+ this.visible);
  }

  AddNewFood(){
    console.log("Add new Food");
    this.foodList.push(this.newFood);
    this.showAddForm();
  }


  ngOnInit() {
    this.foodList=foods;
  }


}
