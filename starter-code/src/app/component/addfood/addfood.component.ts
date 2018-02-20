import { Component, OnInit } from '@angular/core';
import foods from '../../foods';

@Component({
  selector: 'app-addfood',
  templateUrl: './addfood.component.html',
  styleUrls: ['./addfood.component.css']
})
export class AddfoodComponent implements OnInit {
  foods: Object[];
  newFood: Object = {};
  public show:boolean = false;
  constructor() { }

  ngOnInit() {
   this.foods = foods;
  
  }
  toggle(){
    this.show = !this.show;
    
  }
  handleClick(form) {
  
           this.foods.push(this.newFood);
            // clear inputs
            this.newFood={};

   
  }
}
