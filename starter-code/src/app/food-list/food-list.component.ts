import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  showForm: boolean = false;
  foodName: string = '';
  calories: string = '';
  image: string = '';
  showList: boolean = false;
  totalCal: number = 0;

  foods: Object[] = foods;
  todayFoods: any = [];

  constructor() { }

  ngOnInit() {
  }

  addFood(name, calories, image){
    if(!name || !calories || !image){
      alert('llena todos los datos');
      return;
    }

    foods.push({
      name,
      calories,
      image,
      quantity: 0
    });

    this.foodName = '';
    this.calories = '';
    this.image = '';
    this.showForm = false;
  }

  sumCalories(){
    this.totalCal = 0;
    this.todayFoods.forEach(food=>{
      this.totalCal += (food.calories * food.quantity);
    });
  }

  foodCount(comida){
    comida.quantity = parseInt(comida.quantity);
    if(comida.quantity > 0){
      this.todayFoods.push(comida);
      this.sumCalories();
      this.showList = true;
    } else {
      alert('Agrega una cantidad');
    }
    
  }

}
