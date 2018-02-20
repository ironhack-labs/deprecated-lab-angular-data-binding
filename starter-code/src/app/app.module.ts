import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FoodListComponent } from './food-list/food-list.component';
import { PipesPipe } from './pipes.pipe';
import { FoodsearchPipe } from './pipes/foodsearch.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FoodListComponent,
    PipesPipe,
    FoodsearchPipe,
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
