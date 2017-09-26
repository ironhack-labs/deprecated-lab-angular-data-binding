import { Component, OnInit } from '@angular/core';
import { foods } from '../foods';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  listOfFoods: Object[] = foods;
  food: any = {};

  constructor() { }

  ngOnInit() {
  }

  addFood() {
    this.listOfFoods.push(this.food);
  }

}
