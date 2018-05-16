import { Component, OnInit } from '@angular/core';
import foods from "../foods"

@Component({
  selector: 'app-custom-pipes',
  templateUrl: './custom-pipes.component.html',
  styleUrls: ['./custom-pipes.component.css']
})
export class CustomPipesComponent implements OnInit {
  pattern: string;
  foodList: Object[];
  specialList: Object[];
  isTransparent: boolean; 
  newFood: Object = {};
  constructor() { }

  ngOnInit() {
    this.foodList= foods;
    this.isTransparent = true;
  }

  showForm(){
    this.isTransparent = !(this.isTransparent)
  }

  addFood(){
    this.foodList.push(this.newFood)
    console.log(this.foodList)
    this.newFood={};
    this.showForm();
  }

  addSpecial(event){
    this.specialList.push(event.currentTarget)
  }

}
