import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';




import { AppComponent } from './app.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodSearchPipe } from './food-search-pipe';
import { MyFoodComponent } from './my-food/my-food.component';
import { NewFoodFormComponent } from './my-food/my-food.component';

// import { MyFoodsComponent } from './my-foods/my-list.component';




@NgModule({
  declarations: [
    AppComponent,
    FoodListComponent,
    FoodSearchPipe,
    MyFoodComponent,
    NewFoodFormComponent
    // MyFoodsComponent
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
