import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FoodListComponent } from './food-list/food-list.component';
import { SearchByNamePipe } from './my-pipes/search-by-name.pipe';
import { AddNewFoodComponent } from './add-new-food/add-new-food.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodListComponent,
    SearchByNamePipe,
    AddNewFoodComponent,
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
