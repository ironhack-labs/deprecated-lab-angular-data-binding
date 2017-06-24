import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FilterPipe } from './pipes/filter.pipe';
import { AddnewfoodComponent } from './addnewfood/addnewfood.component';
import { TodaysfoodsComponent } from './todaysfoods/todaysfoods.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodListComponent,
    FilterPipe,
    AddnewfoodComponent,
    TodaysfoodsComponent,
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
