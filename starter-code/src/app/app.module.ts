import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FilterfoodPipe } from './pipes/filterfood.pipe';
import { SumItemsPipe } from './pipes/sum-items.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FoodListComponent,
    FilterfoodPipe,
    SumItemsPipe
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
