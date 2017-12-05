import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.css']
})
export class AddFoodComponent implements OnInit { foodList: Object[];
  newFood: Object = {};

  formConfig: any = {
    isVisible: true
  };

  constructor() { }

  ngOnInit() {
    this.foodList = foods;
  }

  addFood() {
    this.foodList.push(this.newFood);
  }

  toggleForm() {
    if (this.formConfig.isVisible) {
      this.formConfig.isVisible = false;
    }
    else {
      this.formConfig.isVisible = true;
    }

  // toggleButton() {
  //   if (this.formConfig.isVisible) {
  //     this.formConfig.isVisible = false;
  //   }
  //   else {
  //     this.formConfig.isVisible = true;
  //   }
  }

}
