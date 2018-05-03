import { Component, OnInit } from "@angular/core";
import foods from "../foods";

@Component({
  selector: "app-food-list",
  templateUrl: "./food-list.component.html",
  styleUrls: ["./food-list.component.css"]
})
export class FoodListComponent implements OnInit {
  userInput: string;
  foodList: any[] = foods;
  formState: any = {
    foodFormShow: true
  };
  alertName: any = {
    alertShow: true
  };
  alertCal: any = {
    alertShow: true
  };
  alertImg: any = {
    alertShow: true
  };
  foodName: string;
  foodCal: number;
  foodImg: string;
  constructor() {}

  ngOnInit() {}

  showForm() {
    this.formState.foodFormShow = !this.formState.foodFormShow;
  }

  addFood() {
    if (this.foodName === undefined) {
      this.alertName.alertShow = false;
    } else {
      this.foodList.forEach(oneFood => {
        oneFood.name = this.foodName;
        console.log(oneFood);
      });
    }
  }
}
