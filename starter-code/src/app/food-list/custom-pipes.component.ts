import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'custom-pipes',
  template: './food-list.component.html',
  styles: []
})
export class CustomPipesComponent implements OnInit {


  stuff: Array<Object> = [];
  pattern: string;

  constructor() { }

  ngOnInit() { }

  addItem(item) {
    this.stuff.push({ name: item });
  }
}
