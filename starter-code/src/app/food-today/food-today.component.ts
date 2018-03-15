import { Component, OnInit, Input, OnChanges } from '@angular/core';

interface food {
  name: string;
  calories: number;
}

@Component({
  selector: 'app-food-today',
  templateUrl: './food-today.component.html',
  styleUrls: ['./food-today.component.css']
})
export class FoodTodayComponent implements OnInit {
  @Input() theFood: any;
  todayList: Array<food> = [];
  totalCal: number = 0;

  constructor() { }

  ngOnInit() { }

  ngOnChanges() {
    if(this.theFood != undefined){
      this.todayList.push(this.theFood)
    }
    this.todayList.forEach(food => {
      this.totalCal = this.totalCal + food.calories;
    });
  }
}
