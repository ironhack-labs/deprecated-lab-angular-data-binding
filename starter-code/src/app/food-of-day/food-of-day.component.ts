import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-food-of-day',
  templateUrl: './food-of-day.component.html',
  styleUrls: ['./food-of-day.component.css']
})
export class FoodOfDayComponent implements OnInit {
  constructor(private foodService: FoodService) { }

  ngOnInit() {
  }

  addFood(name, calories, image) {
    this.foodService.addFood({ name: name.value, calories: calories.value, image: image.value });
    name.value = '';
    calories.value = '';
    image.value = '';
  }
}
