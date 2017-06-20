import { Component, OnInit } from '@angular/core';
import foods from '../foods';


@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {
  foods = foods;
  constructor() { }

  ngOnInit() {
  }

}
