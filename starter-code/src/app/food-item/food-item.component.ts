import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.css']
})
export class FoodItemComponent implements OnInit {
  @Input() foodItem: Object[];
  foodSelectedList: Object[] = [];

  constructor() { }

  ngOnInit() {
  }

  addSelectedFood(foodItem) {
      this.foodSelectedList.push(foodItem);
      console.log(this.foodSelectedList)
      console.log(this.foodItem);
  }

}
