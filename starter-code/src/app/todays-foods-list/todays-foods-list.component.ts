import { Component, OnInit, Input, Output } from '@angular/core';
import foods from '../foods'

@Component({
  selector: 'app-todays-foods-list',
  templateUrl: './todays-foods-list.component.html',
  styleUrls: ['./todays-foods-list.component.css']
})

export class TodaysFoodsListComponent implements OnInit {

  foods = foods;

  constructor() {
  }

  ngOnInit() {
  }

}
