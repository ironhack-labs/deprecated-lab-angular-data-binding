 setFavorite(food) {
    this.clickCounter ++;
      if (this.clickCounter === 1) {
        this.todaysFood.push(food);
      }
      this.todaysFood.forEach((element, index) => {
        if(food.name === this.todaysFood){
        this.todaysFood[index].quantity += food.quantity;
        }
      });
    this.caloriesCount += (food.calories * food.quantity);
    console.log(this.todaysFood);
  }
}


  setFavorite(food) {
    if (this.todaysFood.length === 0) {
      this.todaysFood.push(food);
    } else {
      this.todaysFood.forEach((element, index) => {
        if (food.name !== this.todaysFood[index].name) {
          this.todaysFood.push(food);
        }
        this.todaysFood[index].quantity += food.quantity;
      });
      console.log(this.todaysFood);
    }
    food.quantity = 0;
    this.caloriesCount += (food.calories * food.quantity);
  }
}