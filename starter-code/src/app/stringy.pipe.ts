import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringy'
})
export class StringyPipe implements PipeTransform {
  arrayOnes = ['','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']

  arrayTens = ['','ten','twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
  
  arrayHudreds = ['one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred']
  
  
  
oneChar(anumber){
  return(this.arrayOnes[anumber])
  }
  
twoChar(anumber){
    let numstring=anumber.toString();
    let numArray=numstring.split("")
    let firstChar = numArray[0]
    let secondChar = numArray[1]
    return(this.arrayTens[firstChar] + " " + this.arrayOnes[secondChar])
  }

threeChar(anumber){
  
    let numstring=anumber.toString();
    let numArray=numstring.split("")
    let firstChar = numArray[0]
    let secondChar = numArray[1]
    let thirdChar = numArray[2]
    if (secondChar == 1 && thirdChar > 0) {
    let secondPart = numArray.slice(1)
    let secondHalf = secondPart.join('')
    return(this.arrayHudreds[firstChar - 1] + ' ' + this.arrayOnes[secondHalf])
    } else {
    return(this.arrayHudreds[firstChar - 1] + ' ' + this.arrayTens[secondChar] + ' ' + this.arrayOnes[thirdChar])
    }
  }


  transform(anumber: any, args?: any): any {
    if (anumber.toString().length <= 2 && anumber <=  19){
    return this.oneChar(anumber)
    }
    else if (anumber.toString().length === 2 && anumber > 19){
      return this.twoChar(anumber)
    } 
    else if (anumber.toString().length === 3){
      return this.threeChar(anumber)
    }
    
    
    }


  }
