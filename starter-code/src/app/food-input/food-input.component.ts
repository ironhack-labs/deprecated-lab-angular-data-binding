import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'food-input',
  templateUrl: './food-input.component.html',
  styleUrls: ['./food-input.component.css']
})
export class FoodInputComponent implements OnInit {

  inputConfig: any = {
    hidden: true
  }
  constructor() { }

  ngOnInit() {
  }

  toggleInput() {
    if (this.inputConfig.hidden) {
      this.inputConfig.hidden = false;
    }
    else {
      this.inputConfig.hidden = true;
    }
  }
}
