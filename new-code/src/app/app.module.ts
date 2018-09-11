import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { FoodListComponent } from './food-list/food-list.component';
import { FoodFinderPipe } from './shared/food-finder.pipe'
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodListComponent,
    FoodFinderPipe
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