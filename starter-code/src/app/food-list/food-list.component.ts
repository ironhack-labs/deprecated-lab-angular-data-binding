import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foodsList:Object[];
  // ngOnInit is grabbing the import foods and sending to Object array[]
  //name of object matches this. in ngOnInit
  // newList = {name: "",calories: " ",image: " ", quantity: " "};
 

  constructor() { }

  ngOnInit() {
    this.foodsList = foods;
  }

}
