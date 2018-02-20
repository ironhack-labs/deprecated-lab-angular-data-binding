import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FoodListComponent } from './food-list/food-list.component';
import { SearchablePipe } from './pipe/searchable.pipe';
import { AddFoodComponent } from './add-food/add-food.component';
import { TodaySpecialComponent } from './today-special/today-special.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodListComponent,
    SearchablePipe,
    AddFoodComponent,
    TodaySpecialComponent,
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
