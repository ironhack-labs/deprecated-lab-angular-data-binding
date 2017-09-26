import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  buttonName = "Add Food"

  visibleForm = false;

  toggleFoodForm() {
    this.visibleForm = !this.visibleForm
    if (this.buttonName === "Add Food") {
      this.buttonName = "Close Form"
    } else {
      this.buttonName = "Add Food"
    }
  }
}
