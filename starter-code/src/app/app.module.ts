import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodItemComponent } from './food-list/food-item/food-item.component';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FoodListComponent,
    FoodItemComponent,
    FilterPipePipe,
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
