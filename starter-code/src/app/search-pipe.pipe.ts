import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {

   // console.log("va", value,'arg',  args);
    let newArray =  value.filter(item => {
       return item.name.toLowerCase().includes(args)
      });

      return newArray;
  }
}
