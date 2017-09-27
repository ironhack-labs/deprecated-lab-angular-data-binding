import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todays-food',
  templateUrl: './todays-food.component.html',
  styleUrls: ['./todays-food.component.css']
})
export class TodaysFoodComponent implements OnInit {
  @Input() todaysFoods: Object[];

  constructor() { }

  ngOnInit() {
  }

}
