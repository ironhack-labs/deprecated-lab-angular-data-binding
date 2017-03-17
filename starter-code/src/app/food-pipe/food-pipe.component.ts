import { Component, OnInit } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-food-pipe',
  templateUrl: './food-pipe.component.html',
  styleUrls: ['./food-pipe.component.css']
})
export class FoodPipeComponent implements OnInit {

  constructor() { }

  transform(items: any[], field: string, value: string): any[] {
      if (!items) {
        return [];
      }

      if (!value) {
        return items;
      }

      const myPattern = new RegExp(value, 'i');
      return items.filter(it => it[field].match(myPattern));
    }

  ngOnInit() {
  }

}
