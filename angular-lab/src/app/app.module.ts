import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { FoodListComponent } from './components/food-list/food-list.component';
import { SearcherPipe } from './shared/pipes/searcher.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FoodListComponent,
    SearcherPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
