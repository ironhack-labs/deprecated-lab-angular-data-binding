import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  foodList: Array<Object> = [];
  pattern: ''
  
  constructor() { 
    this.foodList = foods;
  }

  ngOnInit() {
  }


  divHide: boolean = false;

  toggleContent() {
      this.divHide = !this.divHide;
      console.log(this.divHide);
      // alert("hello");
  }
  
  
  

}
