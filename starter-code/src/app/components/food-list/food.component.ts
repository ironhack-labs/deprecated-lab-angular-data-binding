import { Component, OnInit } from '@angular/core';
import { Food } from './../../shared/models/food.model'; 
import  foods  from './../../shared/data/food.data';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
})

export class FoodComponent{
  foods: Array<Food> = foods;
  newFood:Food = new Food();
  
  previewImage: string = '';
  showForm: boolean = false;
  
  foodOfTheDayArray: Object[] = [];
  foodToAdd: Object = {};
  
  showList:boolean= true;
  caloriesPerFood:number = 0;
  totalCalories:number = 0;
  
  onChangePreviewImage(image:string):void{
    this.previewImage = image;    
  }
  
  onClickShowForm():void{
    this.showForm = !this.showForm;
  }
  
  onClickAddFood(): void {
    if(!this.newFood.name || !this.newFood.calories || !this.newFood.image || !this.newFood.description) {
      this.showForm = false;
      this.newFood = new Food();      
    }
    else {       
      this.foods.push(this.newFood);
      this.newFood = new Food();
      this.showForm = false;
    }
  }
  
  onClickAddToList(food:Object):void{
    this.foodOfTheDayArray.push(food);
    this.totalCalories = this.foodOfTheDayArray.reduce((acc:any, curr:any)=>{
      return (curr.calories * curr.quantity) + acc;
    }, 0)
    food = {};
  }
  
  deleteItem(name:string):void{
    this.foodOfTheDayArray = this.foodOfTheDayArray.filter((f)=>{    
      if (f.name === name) {
        this.totalCalories-=(f.calories * f.quantity);
      }
      return f.name !== name;
    });
  }
}
