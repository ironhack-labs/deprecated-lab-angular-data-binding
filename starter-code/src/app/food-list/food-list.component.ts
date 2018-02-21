import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
foods: Array<object> = foods;
visible: boolean = false;
newFood: Object = {};
show(){
  this.visible = !this.visible
}
  constructor() { }

  ngOnInit() {
  }
  addFood(){
    this.foods.push(this.newFood)
   this.newFood = {}
  }


}



  


