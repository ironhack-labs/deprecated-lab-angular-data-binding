import { Component, OnInit } from '@angular/core';
import foodList from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Array<any>;
  newFood: Object = {};
  constructor() { }

  ngOnInit() {
    this.foods = foodList;
  }

  find(searchInput){
    console.log(searchInput.value);
    this.foods = foodList.filter(oneFood=>{
       return oneFood.name === searchInput.value
    });

  }
  showForm(){
    document.getElementById('cooldiv').hidden = false;

  }


    addFood(name, image, calories){
      console.log(name.value, image.value, calories.value);
      this.foods.push({
        name: name.value, 
        image: image.value, 
        calories: calories.value
      })
      
    document.getElementById('cooldiv').hidden = true;
    }


}

