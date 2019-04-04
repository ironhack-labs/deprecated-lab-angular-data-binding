import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-food',
  templateUrl: './app-food.component.html',
  styleUrls: ['./app-food.component.css']
})
export class AppFoodComponent implements OnInit {
  image: string;
  name: string;
  calories: number;
  
  constructor() { }

  ngOnInit() {
  }

}
