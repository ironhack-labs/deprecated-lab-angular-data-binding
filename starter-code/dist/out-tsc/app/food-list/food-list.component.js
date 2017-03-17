var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import foods from '../foods';
var FoodListComponent = (function () {
    function FoodListComponent() {
        this.todaysFoods = [];
        this.newFoodForm = false;
        this.newFood = {};
        this.totalCalories = 0;
    }
    FoodListComponent.prototype.ngOnInit = function () {
        this.foods = foods;
    };
    FoodListComponent.prototype.createNewFood = function () {
        this.newFoodForm = !this.newFoodForm;
    };
    FoodListComponent.prototype.submitNewFood = function () {
        if (!this.newFood) {
            return;
        }
        this.foods = this.foods.slice();
        var copy = Object.assign({}, this.newFood);
        this.newFood = {};
        this.foods.push(copy);
        this.newFoodForm = false;
    };
    FoodListComponent.prototype.addFoodForToday = function (food) {
        var searchIndex = this.todaysFoods.indexOf(food);
        if (searchIndex > -1) {
            this.todaysFoods[searchIndex].quantity++;
        }
        else {
            food.quantity++;
            this.todaysFoods.push(food);
        }
        this.totalCalories += food.calories;
    };
    return FoodListComponent;
}());
FoodListComponent = __decorate([
    Component({
        selector: 'app-food-list',
        templateUrl: './food-list.component.html',
        styleUrls: ['./food-list.component.css']
    }),
    __metadata("design:paramtypes", [])
], FoodListComponent);
export { FoodListComponent };
//# sourceMappingURL=../../../../src/app/food-list/food-list.component.js.map