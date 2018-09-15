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
  
  todayList: Food[] = [];
  
  showList:boolean= true;
  todayListCalories:number = 0;
  
  onChangePreviewImage(image:string):void{
    this.previewImage = image;    
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
  
  onClickDeleteItem(item:Food):void{
    this.foods.splice(this.foods.indexOf(item), 1);
  }
  
  onClickAddToList(item:Food):void{
    this.todayList.push(item);
    this.todayListCalories += item.calories*item.quantity;
    item = new Food();
    
    // this.todayListCalories = this.todayListCalories.reduce((acc, curr)=>{
    //   return (curr.calories * curr.quantity) + acc;
    //   // console.log((curr.calories * curr.quantity) + acc);
      
    // }, 0)
  }
  
  deleteItemList(item:Food):void{
    this.todayList.splice(this.todayList.indexOf(item),1);
    this.todayListCalories-=(item.calories*item.quantity);
  }
}
