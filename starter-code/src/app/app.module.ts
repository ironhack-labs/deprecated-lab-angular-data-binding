import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { SumPipePipe } from './pipes/sum-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FoodListComponent,
    FilterPipePipe,
    SumPipePipe,
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
