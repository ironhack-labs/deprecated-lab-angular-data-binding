import { Component, OnInit, ViewEncapsulation ,Input} from '@angular/core';

@Component({
  selector: 'app-new-food',
  templateUrl: './new-food.component.html',
  styleUrls: ['./new-food.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NewFoodComponent implements OnInit {

  foods:Object[];
  newFood:Object={};

  constructor() { }

  ngOnInit() {
    this.foods=this.foods;
  }
  submitted = false;



  newFoods(){
    console.log('botton new food tocado');
    this.foods.push(this.newFood);
    this.newFood={};
    this.submitted = true;

  }


}
