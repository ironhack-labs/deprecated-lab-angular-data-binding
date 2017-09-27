import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FoodListComponent } from './food-list/food-list.component';
import { SearchByNamePipe } from './pipes/search-by-name.pipe';
import { FoodSearchComponent } from './food-search/food-search.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodListComponent,
    SearchByNamePipe,
    FoodSearchComponent,
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
