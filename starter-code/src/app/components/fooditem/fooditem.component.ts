import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fooditem',
  templateUrl: './fooditem.component.html',
  styleUrls: ['../../app.component.css']
})
export class FooditemComponent implements OnInit {
  @Input() foodInput: any = [];
  constructor() { }

  ngOnInit() {
  }

}
