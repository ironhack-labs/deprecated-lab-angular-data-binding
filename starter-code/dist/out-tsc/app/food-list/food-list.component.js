var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import foods from '../foods';
var FoodListComponent = (function () {
    function FoodListComponent() {
        this.foodsList = [];
        this.addForm = false;
    }
    FoodListComponent.prototype.ngOnInit = function () {
        this.foodsList = foods;
        console.log(this.foodsList);
    };
    FoodListComponent.prototype.addItem = function (newItem) {
        console.log("" + this.submitted);
        this.foodsList.push(newItem);
    };
    FoodListComponent.prototype.showForm = function () {
        console.log("" + this.submitted);
        if (this.submitted === undefined) {
            this.addForm = !this.addForm;
            console.log("" + this.addForm);
        }
    };
    return FoodListComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Object)
], FoodListComponent.prototype, "submitted", void 0);
FoodListComponent = __decorate([
    Component({
        selector: 'app-food-list',
        templateUrl: './food-list.component.html',
        styleUrls: ['./food-list.component.css']
    })
], FoodListComponent);
export { FoodListComponent };
//# sourceMappingURL=../../../../src/app/food-list/food-list.component.js.map