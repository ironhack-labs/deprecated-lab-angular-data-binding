import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FoodListComponent } from './food-list/food-list.component';
import {SearchPipe} from './pipes/search.pipe';
import { SearchlistComponent } from './searchlist/searchlist.component';
import { CallistComponent } from './callist/callist.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodListComponent,
    SearchPipe,
    SearchlistComponent,
    CallistComponent  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
