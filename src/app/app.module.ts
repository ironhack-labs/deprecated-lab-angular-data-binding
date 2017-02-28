import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppFoodListComponent } from './app-food-list/app-food-list.component';
import { FoodFilterPipe } from './pipes/food-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AppFoodListComponent,
    FoodFilterPipe
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
