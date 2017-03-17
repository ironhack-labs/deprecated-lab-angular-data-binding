var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Pipe } from '@angular/core';
var SearchPipePipe = (function () {
    function SearchPipePipe() {
    }
    SearchPipePipe.prototype.transform = function (items, field, value) {
        if (!items)
            return [];
        if (!field)
            return items;
        if (!value)
            return items;
        var myPattern = new RegExp(value.toLowerCase());
        return items.filter(function (item) {
            return item[field].toLowerCase().match(myPattern);
        });
    };
    return SearchPipePipe;
}());
SearchPipePipe = __decorate([
    Pipe({
        name: 'searchPipe',
    })
], SearchPipePipe);
export { SearchPipePipe };
//# sourceMappingURL=../../../src/app/search-pipe.pipe.js.map