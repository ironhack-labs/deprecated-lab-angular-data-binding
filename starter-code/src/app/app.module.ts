import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FoodComponent } from './components/food-list/food.component';
import { FoodPipe } from './shared/pipes/food.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FoodComponent,
    FoodPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
