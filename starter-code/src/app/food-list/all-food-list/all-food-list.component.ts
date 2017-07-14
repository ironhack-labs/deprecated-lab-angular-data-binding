import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import foods from '../../foods';

@Component({
  selector: 'app-all-food-list',
  templateUrl: './all-food-list.component.html',
  styleUrls: ['./all-food-list.component.css']
})
export class AllFoodListComponent implements OnInit {
  @Input() foodInfo: any;
  @Output() onFoodMove = new EventEmitter<any>();
  
  constructor() { }

  ngOnInit() {

  }


    sendToParent(){
        this.onFoodMove.emit(this.foodInfo);
    }
}
