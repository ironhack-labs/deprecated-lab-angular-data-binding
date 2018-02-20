import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FoodListComponent } from './food-list/food-list.component';
import { CustomPipesComponent } from './custom-pipes/custom-pipes.component';
import { SearchPipe } from 'app/pipes/search.pipe';


@NgModule({
  declarations: [
    AppComponent,
    FoodListComponent,
    CustomPipesComponent,
    SearchPipe
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
