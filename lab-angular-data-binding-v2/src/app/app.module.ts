import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { FoodListComponent } from "./food-list/food-list.component";
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [AppComponent, FoodListComponent, FilterPipe],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
