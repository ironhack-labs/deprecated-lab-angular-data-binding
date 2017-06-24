import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FoodListComponent } from './food-list/food-list.component';
import { SearchPipe } from './pipe/search.pipe';
import { NewFoodComponent } from './new-food/new-food.component';
import { TodaysFoodsListComponent } from './todays-foods-list/todays-foods-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodListComponent,
    SearchPipe,
    NewFoodComponent,
    TodaysFoodsListComponent,
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
