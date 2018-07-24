import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FilterPipe } from './pipes/filter-pipe.pipe';
import { RemoveDuplicatesPipe } from './pipes/remove-duplicates.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FoodListComponent,
    FilterPipe,
    RemoveDuplicatesPipe,
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
