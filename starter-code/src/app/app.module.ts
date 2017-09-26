import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FoodListComponent } from './food-list/food-list.component';
import { NewFoodFormComponent } from './new-food-form/new-food-form.component';
import { FilterfoodsPipe } from './filterfoods.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FoodListComponent,
    NewFoodFormComponent,
    FilterfoodsPipe,
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
