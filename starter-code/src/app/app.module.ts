import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FoodListComponent } from './food-list/food-list.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { CaloriesPipe } from './calories.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FoodListComponent,
    SearchFilterPipe,
    CaloriesPipe,
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
