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
    let numberString = String(number);
    let digits = numberString.length;

    if(number === 0) {
      return 'zero';
    }
  
    while(number > 0) {
      if(number < 20) {
        result += toWord(number);
        number = 0;
      } else if(number < 100) {
        result += toWordTens(Math.floor(number / 10)) + ' ';
        number -= 10 * Math.floor(number / 10);
      } else if(number < 1000) {
        result += toWord(Number(numberString.charAt(0))) + ' hundred ';
        numberString = numberString.slice(0, 1);
        number -= 100 * Math.floor(number / 100);
      } else if(number < 10000) {
        result += toWord(Number(numberString.charAt(0))) + ' thousand ';
        numberString = numberString.slice(1, numberString.length);
        number -= 1000 * Math.floor(number / 1000);
      } else {
        return "DON'T EAT THAT MUCH! FAT A**"
      }
    }
  
    function toWord(number) {
      switch (number) {
        case 1: return 'one';
        case 2: return 'two';
        case 3: return 'three';
        case 4: return 'four';
        case 5: return 'five';
        case 6: return 'six';
        case 7: return 'seven';
        case 8: return 'eight';
        case 9: return 'nine';
        case 10: return 'ten';
        case 11: return 'eleven';
        case 12: return 'twelve';
        case 13: return 'thirteen';
        case 14: return 'fourteen';
        case 15: return 'fifteen';
        case 16: return 'sixteen';
        case 17: return 'seventeen';
        case 18: return 'eighteen';
        case 19:  return  'nineteen';
      }
    }
  
    function toWordTens(number) {
      switch (number) {
        case 2: return 'twenty';
        case 3: return 'thirty';
        case 4: return 'forty';
        case 5: return 'fifty';
        case 6: return 'sixty';
        case 7: return 'seventy';
        case 8: return 'eighty';
        case 9: return 'ninety';
      }
    }
  
    return result;
  } 

}
