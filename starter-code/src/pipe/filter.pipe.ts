import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter',
    pure: false
})
export class FilterPipe implements PipeTransform {
    transform(items: any[], query: string): any {
        if (!items || !query) {
            return items;
        }

        const rule = new RegExp(query, 'i');
        return items.filter(item => item.name.match(rule));
    }
}