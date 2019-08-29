import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import foods from '../foods';

@Pipe({
  name:"capitalize"
})
export class CapitalizePipe implements PipeTransform{
  transform(input: string, args: any[]): any {
    if(!input){
      return '';
    }
    input = input.toLowerCase();
    return input.substring(0,1).toUpperCase() + input.substring(1);
  }
}

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  addNew = false;
  foods = foods;
  pattern: string;
  todays = [];
  totalCalories = 0;

  toggleForm(){
    this.addNew = !this.addNew
  }

  onSubmit(form){
    let item = form.value;
    item["quantity"] = 0;
    //console.log(form);
    //console.log(form.value)
    this.foods.push(item);
    this.toggleForm();
  }

  addToday(food, quantitytoadd){
    console.log(food, quantitytoadd);
    this.findOrCreate(food, quantitytoadd);
    this.totalCalories += food.calories;
  }

  findOrCreate(food, quantitytoadd){
    const exist = this.todays.find(f=>f.name == food.name);
    if(!exist){
      this.todays.push(food);
    }else{
      food.quantity = parseInt(food.quantity) + parseInt(quantitytoadd);
      let lista = this.todays.filter(f => f.name === food.name);
      lista.push(food);
    }
  }


  constructor() { }

  ngOnInit() {
  }

}
