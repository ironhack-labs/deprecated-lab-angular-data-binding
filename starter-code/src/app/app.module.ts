import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodFilterPipe } from './pipes-folder/food-filter.pipe';
import { FoodFormComponent } from './food-form/food-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodListComponent,
    FoodFilterPipe,
    FoodFormComponent,
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
