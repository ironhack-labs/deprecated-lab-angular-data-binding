import { Component, OnInit } from '@angular/core';
import foods  from '../foods';
@Component({
  selector: 'app-food-addition',
  templateUrl: './food-addition.component.html',
  styleUrls: ['./food-addition.component.css']
})
export class FoodAdditionComponent implements OnInit {
      myFoods: any[];
      newFood: Object = {};
      constructor() { }

  ngOnInit() {
    this.myFoods = foods;
    console.log("Hasa initialized foods");
  }

  formConfig: any = {
        hasForm: true,
    }

    addFooditem() {
          console.log("Food item has been added!");

          this.myFoods.push(this.newFood);
      }

      toggleForm() {
            if (this.formConfig.hasForm) {
                  this.formConfig.hasForm = false;
            }
            else {
                this.formConfig.hasForm = true;
            }
        }


}
