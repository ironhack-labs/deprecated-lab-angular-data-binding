import { Component, OnInit } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-food-pipes',
  templateUrl: './food-pipes.component.html',
  styleUrls: ['./food-pipes.component.css']
})
export class FoodPipesComponent implements OnInit {

  constructor() { }

  trasform(items: any[], field: string, value:string){
    if(!items){
      return [];
    }
    if(!value){
      return items;
    }
    const myMatcher = new RegExp(value, 'i');
    return items.filter(it => it[field].match(myMatcher));
  }
  ngOnInit() {
  }

}
