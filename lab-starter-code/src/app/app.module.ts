import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FoodListComponent } from './components/food-list/food-list.component';
import { FormsModule } from '@angular/forms';
import { SearchFoodPipe } from './pipes/search-food.pipe';
@NgModule({
  declarations: [
    AppComponent,
    FoodListComponent,
    SearchFoodPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
