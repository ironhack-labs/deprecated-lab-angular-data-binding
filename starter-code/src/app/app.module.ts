import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FoodListComponent } from './food-list/food-list.component';

//custom pipes
import {CapitalizePipe} from './food-list/food-list.component';
import {BlissFilter} from '../pipes/filter';

@NgModule({
  declarations: [
    AppComponent,
    FoodListComponent,
    CapitalizePipe,
    BlissFilter
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
