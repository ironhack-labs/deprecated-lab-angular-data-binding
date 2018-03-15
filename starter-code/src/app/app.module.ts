import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodNewComponent } from './food-new/food-new.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FoodTodayComponent } from './food-today/food-today.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodListComponent,
    FoodNewComponent,
    FilterPipe,
    FoodTodayComponent,
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
