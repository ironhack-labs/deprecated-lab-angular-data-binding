import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form-app',
  templateUrl: './form-app.component.html',
  styleUrls: ['./form-app.component.css']
})
export class FormAppComponent implements OnInit {
  @Output() onCreate = new EventEmitter<any>();
  newFood: Object = {
  };
  constructor() { }

  ngOnInit() {
  }

  addFood() {
    this.onCreate.emit(this.newFood);
  }

}
