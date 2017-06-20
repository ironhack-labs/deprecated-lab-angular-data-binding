import { Component, OnInit } from '@angular/core';
import {today} from '../foodlist';
import {calo} from '../foodlist';

import {todaysfood} from '../todaysfood';
@Component({
  selector: 'app-callist',
  templateUrl: './callist.component.html',
  styleUrls: ['./callist.component.css']
})
export class CallistComponent implements OnInit {

  cal =  calo;
  todays = today;

  constructor() { }

  ngOnInit() {
  }

}
