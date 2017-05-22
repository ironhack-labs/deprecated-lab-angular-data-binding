import { Component, OnInit, Input } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  @Input() submitted: any
  foodsList: Array<any> = [];
  addForm: boolean = false;

  ngOnInit() {
    this.foodsList = foods;
    console.log(this.foodsList);
  }
  addItem(newItem) {
    console.log(`${this.submitted}`)
    this.foodsList.push(newItem);
  }
  showForm() {
    console.log(`${this.submitted}`)
    if (this.submitted === undefined){
      this.addForm = !this.addForm;

    console.log(`${this.addForm}`)
  }

}
}
