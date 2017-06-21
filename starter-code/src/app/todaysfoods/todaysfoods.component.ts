import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-todaysfoods',
  templateUrl: './todaysfoods.component.html',
  styleUrls: ['./todaysfoods.component.css']
})
export class TodaysfoodsComponent implements OnInit {
  foods = foods;
  constructor() { }

  ngOnInit() {
  }

}
