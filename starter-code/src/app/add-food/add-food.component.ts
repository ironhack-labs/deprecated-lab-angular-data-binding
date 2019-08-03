import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.css']
})
export class AddFoodComponent implements OnInit {

  newFoodName : string = "";
  newFoodCal : number;
  newFoodURL : string;
  newFoodQty : number;



  constructor() { }

  ngOnInit() {
  }

}
