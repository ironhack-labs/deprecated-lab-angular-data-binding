import { form } from './interfaces';

export class Food implements form{
  name     : string;
  calories : number;
  image    : string;
  quantity : number;

  constructor( nameForm : string, caloriesForm : number, imageForm : string ) {
    this.name = nameForm;
    this.calories = caloriesForm;
    this.image = imageForm;
    this.quantity = 0;
  }
}