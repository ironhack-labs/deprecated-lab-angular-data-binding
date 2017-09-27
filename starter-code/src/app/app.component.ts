import { Component, OnInit} from '@angular/core';
import foods from './foods';

class Food{name:string}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Nutrition!';
  formVisible :boolean=false;
  ListVisible :boolean=false;
  searchTerm: string;
  menu: Object[]=[]
  filteredMenu: Object[]=[];
  ngOnInit() {
    this.menu=foods
    this.updateFilteredFoodList();
  }

  showForm(formVisible:boolean){
       this.formVisible=!this.formVisible;
  }

  handleNewFood(food){
    this.menu.push(food);
    this.formVisible==false;
    this.updateFilteredFoodList();
  }

  updateFilteredFoodList(){
    this.filteredMenu= this.menu.filter((food)=>{
      return !this.searchTerm|| food=== this.searchTerm
    });
  }

}
