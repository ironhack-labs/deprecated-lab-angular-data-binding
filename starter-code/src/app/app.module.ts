import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodInputComponent } from './food-input/food-input.component';
import { SearchFoodPipe } from './search-food.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FoodListComponent,
    FoodInputComponent,
    SearchFoodPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
