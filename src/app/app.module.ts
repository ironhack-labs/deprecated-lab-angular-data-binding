import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { find } from 'app/pipes/find.pipe';

import { AppComponent } from './app.component';
import { AppFoodListComponent } from './app-food-list/app-food-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AppFoodListComponent,
    find
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
