import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { FoodListComponent } from "./food-list/food-list.component";
import { SearchByNamePipe } from './search-by-name.pipe';

@NgModule({
  declarations: [AppComponent, FoodListComponent, SearchByNamePipe],
  imports: [BrowserModule, FormsModule, HttpModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
