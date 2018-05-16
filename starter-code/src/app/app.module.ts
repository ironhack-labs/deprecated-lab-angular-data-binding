import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FoodListComponent } from './food-list/food-list.component';
import { CapitalizePipe } from './pipe/capitalize.pipe';
import { SearchPipe } from './pipe/search.pipe'

@NgModule({
  declarations: [
    AppComponent,
    FoodListComponent,
    CapitalizePipe,
    SearchPipe,
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
