"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var foods_1 = require("../foods");
var FoodListComponent = (function () {
    function FoodListComponent() {
        this.foods = foods_1["default"];
    }
    FoodListComponent.prototype.ngOnInit = function () {
    };
    FoodListComponent = __decorate([
        core_1.Component({
            selector: 'app-food-list',
            templateUrl: './food-list.component.html',
            styleUrls: ['./food-list.component.css']
        })
    ], FoodListComponent);
    return FoodListComponent;
}());
exports.FoodListComponent = FoodListComponent;
