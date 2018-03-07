import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'totalCalory',
  pure: false
})
export class TotalCaloryPipe implements PipeTransform {

  transform(items: any[], calories: number, quantity: number): number {
    
    return items.reduce((a, b) => a + (b['calories'] * b['quantity']), 0);
}

}
