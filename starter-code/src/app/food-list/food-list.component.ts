import {
  Component,
  OnInit
} from '@angular/core';
import foods from '../foods';


@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Array < Object > = foods;
  newFood: Object = {};
  search: string = '';
  visible: boolean = false;
  todaysFoods: Object[] = [];

  constructor() {}

  ngOnInit() {
    this.foods = foods;
  }
  addFood(): void {
    console.log("A new food has been added");
    console.log(this.newFood);
    foods.push(this.newFood);
    this.newFood = "";
    this.toggleForm();
  }
  toggleForm(): void {
    this.visible = !this.visible;
  };

  increaseQuantity(food){
    food.quantity += 1;
    this.todaysFoods.push(food);
    console.log(this.todaysFoods);

  }

decreaseQuantity(food){
  food.quantity -= 1;
}



}
