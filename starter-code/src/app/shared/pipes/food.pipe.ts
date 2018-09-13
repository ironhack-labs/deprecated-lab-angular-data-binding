import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searcher'
})
export class FoodPipe implements PipeTransform {
  
  //SE EJECUTA AUTOMATICAMENTE
  transform(foods:Object[], pattern:string, field:string = 'name'):Object[] {
    // console.log(field, pattern);
    
    if (!pattern) {      
      return foods;
    } else if(!foods){      
      return [];
    }    
    const regex = new RegExp(pattern, 'i');  
    //AL IGUAL QUE TENEMOS DIRECTIVA DE ATRIBUTO DINAMICA EN .TS O SELECTOR DE ATRIBUTO EN CSS TAMBIEN HAY ACCESO A OBJECT CON [] PARA QUE SEA DINAMICO
    return foods.filter(f => f[field].match(regex));
  }
}


