import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { FoodListComponent } from "./food-list/food-list.component";
import { SearchBoxPipe } from "./search-box-pipe/search-box-pipe.pipe";

@NgModule({
  declarations: [AppComponent, FoodListComponent, SearchBoxPipe],
  imports: [BrowserModule, FormsModule, HttpModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
