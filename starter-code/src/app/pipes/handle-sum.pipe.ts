import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'handleSum'
})
export class HandleSumPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    return null;
  }

}
