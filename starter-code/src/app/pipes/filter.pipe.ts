import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filter"
})
export class FilterPipe implements PipeTransform {
  transform(items: any, field: string, search: string): any {
    console.log(items);
    
    if (!search) return [];
    
    if(field=="quantity"){
       return items.filter(e=>e.quantity>0)
    }

    if (!search) return items;
    const myPattern = new RegExp(search, "i");
    return items.filter(it => it[field].match(myPattern));
  }
}
