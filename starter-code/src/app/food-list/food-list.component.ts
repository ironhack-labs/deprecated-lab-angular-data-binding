import { Component, OnInit } from '@angular/core';
import foods from '../foods';
import { IfObservable } from '../../../node_modules/rxjs/observable/IfObservable';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
foods:Array<Object>;
isSubmited:boolean=true;
newFood:object={quantity:1};
text:string="Add Food";
specialFoods:Array<Object>=[];
totalCalorie:number=0;
  constructor() { }

  ngOnInit() {
    this.foods = foods;
  }

  submited(){
    this.isSubmited=!this.isSubmited;
    if(this.text=="Add Food"){
      this.text="Submit";
    }
    else{
      this.text="Add Food";
    }
   
  }

  add(){   
    if(this.isSubmited==false){
      //Compruebo si se ha rellenado el formulario
      if(this.newFood["name"]==undefined || this.newFood["calories"]==undefined || this.newFood["image"]==undefined){
        console.log("entra")
      }
    else{
      foods.push(this.newFood);
      this.newFood={quantity:1}
    }
  }
  }

  addToSpecial(food:Object,quantity){  
    if(this.specialFoods.indexOf(food)!=-1){
      console.log(this.specialFoods[this.specialFoods.indexOf(food)]["quantity"])
      this.specialFoods[this.specialFoods.indexOf(food)]["quantity"]+=parseInt(quantity)
      this.totalCalorie+=quantity*food["calories"];
      this.newFood={quantity:1}
    }
    else{
    this.newFood=food;
    this.newFood["quantity"]=parseInt(quantity);
    this.specialFoods.push(this.newFood);
    this.totalCalorie+=quantity*food["calories"];
    this.newFood={quantity:1}
    }

  }
}
