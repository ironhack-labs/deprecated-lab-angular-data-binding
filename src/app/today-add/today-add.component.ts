import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-today-add',
  templateUrl: './today-add.component.html',
  styleUrls: ['./today-add.component.css']
})
export class TodayAddComponent implements OnInit {

todayFoodList : Array<Object>;
newFoodForToday : Object = {};


  constructor() { }

  ngOnInit() {

  }

addToday(name){
console.log(name + "hello")
}


}
