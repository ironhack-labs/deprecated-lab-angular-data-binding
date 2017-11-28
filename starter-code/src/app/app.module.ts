import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FoodListComponent } from './food-list/food-list.component';
import { SearchComponent } from './search/search.component';
import { SearhPipePipe } from './pipes/searh-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FoodListComponent,
    SearchComponent,
    SearhPipePipe,
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
