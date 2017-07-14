import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FoodListComponent } from './food-list/food-list.component';
import { DoTheSearchPipe } from './do-the-search.pipe';
import { AllFoodListComponent } from './food-list/all-food-list/all-food-list.component';
import { TodayFoodListComponent } from './food-list/today-food-list/today-food-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodListComponent,
    DoTheSearchPipe,
    AllFoodListComponent,
    TodayFoodListComponent,
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
