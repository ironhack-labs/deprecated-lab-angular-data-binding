import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent {
  foodList: Array<Object> = foods;
  newFood: Object = {};
  }

createFood(formStatus){
  if (formStatus.style.display == "block"){
    formStatus.style.display = "none"
  }
  else {formStatus.style.display = "block"}
}

  foodList.push()

}
