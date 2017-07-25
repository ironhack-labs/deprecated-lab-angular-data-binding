import { FoodsService } from './shared/foods.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FoodListComponent } from './food-list/food-list.component';
import { SearchPipe } from './pipes/search.pipe';
import { TodaysFoodsComponent } from './todays-foods/todays-foods.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodListComponent,
    SearchPipe,
    TodaysFoodsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [FoodsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
