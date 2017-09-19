import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Array<any> = foods;
  search: string;
  status:boolean = false;
  newName : string;
  newImage : string;
  newCalories : string;

  constructor() { }

  ngOnInit() {
  }
  toggleFrom(): void {
    this.status = !this.status;
  }
  addFood():void{
    let newFood : any =  {
      name: this.newName,
      calories: this.newImage,
      image: this.newCalories
    }
    foods.push(newFood);
  }

}
