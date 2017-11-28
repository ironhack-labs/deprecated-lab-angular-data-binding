import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'custom-pipes',
  template: `
    <div>
      <label for="thing_name"> Thing Name </label>
      <input placeholder="new thing" type="text" #thingName>
      <button (click)="addItem(thingName.value); thingName.value=''">
          add
      </button>
    </div>

    <div>
      <label for="things_name"> Search thing: </label>
      <input id="things_name" placeholder="thing name"
              type="text" [(ngModel)]="pattern">
    <div>

    <h4> Stuff list </h4>
    <ul>
      <li *ngFor="let thing of stuff | filter:'name':pattern; let i = index">
        {{ i+1 }}) {{ thing.name }}
      </li>
    </ul>
  `,
  styles: []
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
