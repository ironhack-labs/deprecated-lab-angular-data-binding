import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FoodListComponent } from './food-list/food-list.component';
import { CustomPipesComponent } from './custom-pipes/custom-pipes.component';
import { FoodPipesComponent } from './food-pipes/food-pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodListComponent,
    CustomPipesComponent,
    FoodPipesComponent,
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
