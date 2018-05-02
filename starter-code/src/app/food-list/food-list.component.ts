
  import { Component, OnInit } from '@angular/core';
  import foods from '../foods';
  
  @Component({
   selector: 'app-food-list',
   templateUrl: './food-list.component.html',
   styleUrls: ['./food-list.component.css']
  })
  export class FoodListComponent implements OnInit {
    foods = foods;
  //  name : string;
  //  calories : string;
  //  quantity : string;
  //  image : string;
  newItem = {};
   
   show = false;
   buttonName = 'Show Form';

  
   constructor() { }
  
   toggle() {
     this.show = !this.show;
     console.log(this.show)
     if (this.show) {
     this.buttonName = 'Hide Form';
     } else {
       this.buttonName = 'Show Form';
     }
    console.log(this.buttonName)
   }
  
   ngOnInit() {

   }
  
  //  add(name, calories, quantity, image){
  //     this.foods.unshift({name, calories, quantity, image})

  //  }

  add(){
    this.foods.unshift(this.newItem);
    this.newItem = {};
    this.toggle();
  }

  }