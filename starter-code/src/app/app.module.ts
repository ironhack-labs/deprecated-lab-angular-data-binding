import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FormComponent } from './food-list/form/form-component';
import { FoodListComponent } from './food-list/food-list.component';
import { CustomPipesComponent } from './food-list/pipes/pipe.component';
import { FilterPipe } from './food-list/pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FoodListComponent,
    CustomPipesComponent,
    FilterPipe,
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
