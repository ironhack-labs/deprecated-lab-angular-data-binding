import { ElementRef, Component,  OnInit,  ViewChild, AfterViewInit } from '@angular/core';
import foodList                 from '../foods';
import inputForm             from '../inputForm';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})



export class FoodListComponent implements OnInit {

  foods: Object[];
  tFoods: Object[];
  
  newFoodInput : string = '';

  newFood : Object = {
    name: '',
    calories: 0,
    image: '',
    quantity: 0
  };

  todayFood : Object = {
    name: '',
    calories: 0,
    quantity: 0
  }

  todayFoodList: Object[] = [];

  constructor() { }

  /*********************************************************************************/
  /* appendInputForm()
  /* appends the input form to add a new food
  /* [innerHtml] is great option in most cases, but it fails 
  /* with really large strings or when you need hard-coded styling in html.
  /* Because of that you have to use a @ViewChild approach:
  /* All you need to do, is to create a div in your html file and give it some id:
  /*********************************************************************************/
  @ViewChild('inputForm') inputForm: ElementRef;

  appendInputForm() : void {
    // console.log('*************** html FROM inputForm ********************');
    // console.log(inputForm);
    this.inputForm.nativeElement.innerHTML = inputForm;
  }

  /*********************************************************************************/
  /* addTodayFood(food : Object, quantity )
  /* add food to the list of foods
  /*********************************************************************************/
  addTodayFood(food : Object, quantity ) : void {
    this.todayFood = { 
      name : food['name'],
      calories : food['calories'],
      quantity: quantity.value
    }
    
    this.todayFoodList.push(this.todayFood);  
    this.todayFoodList.forEach( oneFood => {
      console.log(oneFood['name']);
    }) 
  }

  /*********************************************************************************/
  /* addNewFood()
  /* add a new food to the array of foods
  /*********************************************************************************/
  addNewFood() : void {
    this.foods.unshift(this.newFood);
  }

  submitForm(myForm) {
    console.log(myForm);
  }

  ngOnInit() {
    this.foods = foodList;
    this.tFoods = this.todayFoodList;
  }
}
