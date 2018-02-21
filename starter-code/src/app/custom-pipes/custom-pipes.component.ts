import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipes',
  templateUrl: './custom-pipes.component.html',
  styleUrls: ['./custom-pipes.component.css']
})


export class CustomPipesComponent implements OnInit {

  today = new Date();
  stuff: Array<Object> = [];
  pattern: string;

  constructor() {}

  ngOnInit() {}

  addItem(item) {
    this.stuff.push({name: item});
  }
}