import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  foodList: any[] = foods;

  formConfig: any = {
    isShowing: true
  }

  constructor() { }

  ngOnInit() {
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
