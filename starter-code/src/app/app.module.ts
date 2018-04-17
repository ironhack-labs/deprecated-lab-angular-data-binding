import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodItemComponent } from './food-item/food-item.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FoodSelectedComponent } from './food-selected/food-selected.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodListComponent,
    FoodItemComponent,
    NavbarComponent,
    FilterPipe,
    FoodSelectedComponent,
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
