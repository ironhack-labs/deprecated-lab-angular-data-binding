import { Component, OnInit } from '@angular/core';
import {FoodService} from '../services/food.service'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {


theNewFoodItem:any = {};

addFood(name, image, calories){
  console.log(name.value, image.value, calories.value);
  this.theService.serviceFoodList.push({ //need to resolve name of the food array.
    name: name.value, 
    image: image.value, 
    calories: calories.value
  })
  
// // document.getElementById('cooldiv').hidden = true;
}






  constructor(public theService: FoodService) { }

  ngOnInit() {
  }




  
}
