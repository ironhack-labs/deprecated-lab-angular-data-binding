// tslint:disable-next-line:quotemark
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-fooditem',
  templateUrl: './fooditem.component.html',
  styleUrls: ['../../app.component.css']
})
export class FooditemComponent implements OnInit {
  @Input() foodInput: any = [];
  @Output() onToCart = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}

  addTodaysFood() {
    this.onToCart.emit(this.foodInput);
  }
}
