import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  foods = foods;

  constructor() { }

  ngOnInit() {
    //here i put the code i want to repeat on every load,
    //to be sure it will pick up all changes
    //the way i did it works now but if i had database and pushed anything in it
    //it will not pick up the change 
  }

}
