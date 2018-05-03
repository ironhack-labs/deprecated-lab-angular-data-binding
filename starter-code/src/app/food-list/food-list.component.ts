import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  userInput: string;
  foodList : Object[] = foods;
  
  classState: any = {
    bigText: false,
    comicFont: false,
    rainbowColored: false
  }
  constructor() { }

  ngOnInit() {
  }

  addFood(){

  }

}
