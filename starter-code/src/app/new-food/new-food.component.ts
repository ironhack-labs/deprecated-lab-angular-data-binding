import { Component, OnInit, ViewEncapsulation ,Input} from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-new-food',
  templateUrl: './new-food.component.html',
  styleUrls: ['./new-food.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NewFoodComponent implements OnInit {

  foods = foods ;
  newFood:Object={};

  constructor() { }

  ngOnInit() {

  }
  submitted = true;



  newFoods(name, image, calories){
    console.log('button newFoods wroks');
    var newFood={
    name:name,
    calories:calories,
    image:image,
 }
 foods.unshift(newFood);
  }


}
