import { Component, OnInit } from '@angular/core';
import TodaysFoods from '../todaysfoods';

@Component({
  selector: 'app-todaysfoods',
  templateUrl: './todaysfoods.component.html',
  styleUrls: ['./todaysfoods.component.css']
})
export class TodaysfoodsComponent implements OnInit {
  todaysfoods = TodaysFoods;
  constructor() { }

  ngOnInit() {
  }

}
