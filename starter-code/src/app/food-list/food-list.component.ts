import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
foods= foods;
newFood: Object= {};

constructor() { }

  ngOnInit() {
  }
  addFood(){
    console.log("Add contact has been called");
   this.foods.push(this.newFood);
  }
  isOn: boolean = false;
  showAdd() {
     this.isOn = !this.isOn;
  }

}
