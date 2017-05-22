import {
  Component,
  OnInit,
  Output,
  EventEmitter
   } from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  @Output() onSubmit = new EventEmitter<any>();
  newItem: any = {};

  constructor() {

  }

  ngOnInit() {

  }
  addItem(newItem) {
    this.onSubmit.emit(newItem)
  }

}
