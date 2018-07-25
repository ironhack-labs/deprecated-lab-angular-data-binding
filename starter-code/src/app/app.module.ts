import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FoodListComponent } from './food-list/food-list.component';
import {FormsModule} from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    FoodListComponent,
    FilterPipe

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
