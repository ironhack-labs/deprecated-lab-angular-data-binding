import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FilterPipe } from './food-list/filter.pipe';
import { AddFoodComponent } from './add-food/add-food.component';
import { AppFoodComponent } from './app-food/app-food.component';


@NgModule({
  declarations: [
    AppComponent,
    FoodListComponent,
    FilterPipe,
    AddFoodComponent,
    AppFoodComponent,
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
