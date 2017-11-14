import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Routes } from "@angular/router";
import { AppComponent } from './app.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodSearchPipe } from './pipe-search';
import { NewFoodComponent } from './new-food/new-food.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'new',  component: NewFoodComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    FoodListComponent,
    FoodSearchPipe,
    NewFoodComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
