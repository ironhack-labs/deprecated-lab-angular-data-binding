import { Component } from '@angular/core';
import { foods } from './foods';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Foods!';

  input: string = "";

  listOfFoods: Object[] = foods;

}
