import { Component, OnInit } from '@angular/core';
import foods from '../foods';
//import { access } from 'fs';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

    foods: Object[];
    newFood: Object = {
        name: '',
        calories: null,
        image: '',
        quantity: null
    }

    todayFoods: Object[];

    formOn = true;
    listOn = true;
    totalCalories = null;

    constructor() { }

    ngOnInit() {
        this.foods = foods;
        this.todayFoods = [];
    }

    showAddForm(){
        this.formOn= !this.formOn;
    }

    addFood(){
        this.foods.push(this.newFood);
        this.newFood = {
            name: '',
            calories: null,
            image: '',
            quantity: null
        }
        this.showAddForm();
    }

    addTodaysFoods(index){
        this.todayFoods.push(this.foods[index]);
        this.totalCalories = this.todayFoods.map((food)=>{return food["calories"]}).reduce((acc, current) => {
            return acc + current;
        });

    }

    showTodaysFoodsList(){
        this.listOn = !this.listOn;
    }

}
