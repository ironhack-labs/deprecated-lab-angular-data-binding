import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FoodListComponent } from './food-list/food-list.component';
import { StringifierPipe } from './stringifier.pipe';
import { FoodOfDayComponent } from './food-of-day/food-of-day.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodListComponent,
    StringifierPipe,
    FoodOfDayComponent
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
