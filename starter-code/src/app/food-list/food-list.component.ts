import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
foods: Array<Object>;
platano: Boolean = false;
favorite: Array<Object> = [];

  constructor() { }

  ngOnInit() {
    this.foods = foods;
  }
  addFavorite(item,qty){
    item.qty = qty.value;
    item.total = item.qty*item.calories;
    item.added = item.qty
    console.log(qty)
    if(this.favorite.indexOf(item )=== -1){
      this.favorite.push(item)  
    }else{
    }
    console.log('Add food as favorite');
  }
  addFood(){
    console.log('Add food has been called');
    this.foods.push(this.foods)
  }

  toggle(){
    this.platano=!this.platano
  }
}

