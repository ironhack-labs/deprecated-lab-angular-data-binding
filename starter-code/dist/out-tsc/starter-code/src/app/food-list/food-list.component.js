var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
import foods from '../foods';
var FoodListComponent = (function () {
    function FoodListComponent() {
        this.foodsList = [];
    }
    FoodListComponent.prototype.ngOnInit = function () {
        var _this = this;
        foods.forEach(function (food) {
            _this.foodsList.push(food);
        });
        console.log(this.foodsList);
    };
    return FoodListComponent;
}());
FoodListComponent = __decorate([
    Component({
        selector: 'app-food-list',
        templateUrl: './food-list.component.html',
        styleUrls: ['./food-list.component.css']
    })
], FoodListComponent);
export { FoodListComponent };
//# sourceMappingURL=../../../../../../src/app/food-list/food-list.component.js.map