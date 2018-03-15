import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import foods from '../../foods';

@Component({
  selector: 'app-form-new-product',
  templateUrl: './form-new-product.component.html',
  styleUrls: ['./form-new-product.component.css']
})
export class FormNewProductComponent implements OnInit {

  @Output() closeForm = new EventEmitter<string>();

  foods: Array<Object> = [];
  newFood: Object = {
    name: '',
    calories: '',
    image: '',
  };

  constructor() { }

  ngOnInit() {
    this.foods = foods;
  }

  addProduct() {
    this.foods.unshift(this.newFood);
    this.closeForm.emit('closeForm');
  }

}
