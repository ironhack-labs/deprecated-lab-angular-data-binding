import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FoodListComponent } from './food-list/food-list.component';
import { StringifierPipe } from './stringifier.pipe';
import { FoodService } from './services/food.service'; //ALSO IMPORT. The NAME FOR HERE NEEDS TO MATCH THE 
import foods from './foods';
import { AddComponent } from './add/add.component'
//THE CLASS THAT IS BEING EXPORTED FROM FOOD.SERVICE.TS, AND YOU INCLUDE THE FILE PATH.



@NgModule({
  declarations: [
    AppComponent,
    FoodListComponent,
    StringifierPipe,
    AddComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [FoodService], //SERVICE COMES HERE> DO IT HERE FIRST AND AUTO IMPORT
  bootstrap: [AppComponent]
})
export class AppModule { }
