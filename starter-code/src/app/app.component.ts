import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Nutrition';
  form: boolean = false;
  list: boolean = true;

  showForm(form: boolean){
    this.form = !this.form;
  }

  showList(list: boolean){
    this.list = !this.list;
  }
}
