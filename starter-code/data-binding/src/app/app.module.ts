import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FoodListComponent } from './componenents/food-list/food-list.component';
import { FoodFinderPipe } from './shared/pipes/food-finder.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FoodListComponent,
    FoodFinderPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
