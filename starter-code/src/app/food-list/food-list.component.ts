import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  foods = []
  newFood: Object = {}
  todayFoods = []
  sumCalories = 0;

  constructor() { }

  sumcalories(N,C,Q){
    console.log(Q)
    let calQuan = C*Q
    this.todayFoods.push({name:N, calories:calQuan})
    this.sumCalories += calQuan
  }

  newFoodForm(e, n){
    console.log(e.style.display)
    if(e.style.display === "none"){
      e.style.display = "inherit"
      n.style.display = "inherit"
    }else{
      e.style.display = "none"
    }
  }

  submitForm(e, n, nN, nC, nI){
    if(e.style.display === "none"){
      e.style.display = "inherit"
    }else{
      e.style.display = "none"
      n.style.display = "none"
    }
    this.foods.push({name:nN.value, calories:nC.value, image:nI.value})
  }

  ngOnInit() {
    this.foods = foods;
  }

}
