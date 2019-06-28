import { Component} from "@angular/core";
import foods from "../foods";
import { FoodInterface } from "../food";

class Food implements FoodInterface {
  constructor(
    public name: string,
    public calories: number,
    public image: string,
    public quantity: number = 0
  ) {}
}

@Component({
  selector: "app-food-list",
  templateUrl: "./food-list.component.html",
  styleUrls: ["./food-list.component.css"]
})
export class FoodListComponent {
  foods: Object[];
  foodList: Array<FoodInterface> = foods.map(el => new Food(el.name, el.calories, el.image))
  showAddForm: boolean = false;
  newFood: FoodInterface = new Food("", 0, "")

  toggleForm() {
    this.showAddForm = !this.showAddForm;
  }

  addFood() {    
    this.foodList = [...this.foodList, this.newFood];
    this.newFood = new Food("", 0, "")
    this.toggleForm();
  }
}
