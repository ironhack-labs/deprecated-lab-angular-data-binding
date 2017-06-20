import { Component, OnInit, Input } from '@angular/core';
import {SearchPipe} from '../pipes/search.pipe';
import foods from '../foods';
import {foo} from '../food';
import {today} from '../foodlist';
import {todaysfood} from '../todaysfood';
import {calo} from '../foodlist';


@Component({
  selector: 'app-searchlist',
  templateUrl: './searchlist.component.html',
  styleUrls: ['./searchlist.component.css']
})
export class SearchlistComponent implements OnInit {

  public name: foo[];
  public Manyfoods: boolean = false;


  onKey(myInput): foo[] {
    if (myInput === undefined) {
      this.name = foods;

      return this.name;
    } else {
      console.log('here')
      return this.name = new SearchPipe().transform(myInput)
    }
    //

  };


  public counter:number = 0;
  addProd(cal, img, name): void {
    let newfood = new foo(name.value,img.value,cal.value,0)
foods.push(newfood);

  }
  todayNut(food,many):void{


  let cal=   food.calories * many.value


let newfood = new todaysfood(food,cal);

this.counter = this.counter + cal;

this.addProds(newfood,this.counter)


  }
  addProds(prod,thi):void{
    today.push(prod);
    calo[0]=thi;
  }


  todays = today;
  Manyfood = this.Manyfoods;
  constructor() {
  }

  ngOnInit() {

  }

}
