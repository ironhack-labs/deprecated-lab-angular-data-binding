import { Component, OnInit } from '@angular/core';
import foods  from '../foods';

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.css']
})
export class AddFoodComponent implements OnInit {

  myFoods: any[];
  newFood: Object = {};

  formConfig: any = {
      hasForm: false,
  }

  constructor() { }

  ngOnInit() {
      this.myFoods = foods;
  }

  addFood() {
      console.log("Food item has been added!");

      this.myFoods.push(this.newFood)
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
