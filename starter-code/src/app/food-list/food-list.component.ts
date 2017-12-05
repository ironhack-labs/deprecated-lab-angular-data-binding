import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  foodList: any[] = foods;

  newFoodForm: object = {}


  formConfig: any = {
    isShowing: true
  }

  constructor() { }

  ngOnInit() {
  }

  addNew() {
    console.log(this.newFoodForm);
    this.foodList.push(this.newFoodForm);
  }

  showForm(){
    if(this.formConfig.isShowing) {
       this.formConfig.isShowing = false
    }
    else {
       this.formConfig.isShowing = true;
    }
  }

}
