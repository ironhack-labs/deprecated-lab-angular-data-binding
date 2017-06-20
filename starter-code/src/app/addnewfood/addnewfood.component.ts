import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-addnewfood',
  templateUrl: './addnewfood.component.html',
  styleUrls: ['./addnewfood.component.css']
})
export class AddnewfoodComponent implements OnInit {
  foods: Object[];
  newFood: Object = {
    name: '',
    calories: '',
    image: ''
  }
  show: boolean = true;
  ngOnInit() {
    this.foods = foods;
  }

  addFood () {
    console.log('hi');
    this.foods.push(this.newFood);
    this.show = true;
  }

  showForm() {
    this.show = false;
  }

  constructor() { }


}
