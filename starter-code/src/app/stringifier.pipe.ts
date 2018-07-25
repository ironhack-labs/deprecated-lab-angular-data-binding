import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringifier'
})
export class StringifierPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return this.stringify(value);
  }

  stringify(number) {
    let result = '';
    let inputString = String(number).split('');
    console.log(inputString);
    const singleDigits = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const doubleDigits = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    while(inputString.length > 0) {
      if(number < 20 || inputString.length === 1) {
        result += singleDigits[number];
        return result;
      } else if(inputString.length === 2) {
        result += doubleDigits[Number(inputString[0])] + ' ';
        number -= Number(inputString[0]) * 10;
      } else if(inputString.length === 3) {
        result += singleDigits[Number(inputString[0])] + ' hundred ';
        number -= Number(inputString[0]) * 100;
      } else if(inputString.length === 4) {
        result += singleDigits[Number(inputString[0])] + ' thousand ';
        number -= Number(inputString[0]) * 1000;
      }
      inputString = inputString.slice(1, inputString.length);
    }
    return result;
  }
}
