import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
 name: 'searchfilter'
})
export class SearchFilterPipe implements PipeTransform {
 transform(items: any[], field: string, value: string): any[] {
   return items.filter(it => it[field].toLowerCase().indexOf(value.toLowerCase()) != -1);
 }
}
