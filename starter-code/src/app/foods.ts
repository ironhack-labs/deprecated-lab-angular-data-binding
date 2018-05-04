export class Food {
  constructor(
      public name: string,
      public calories: number,
      public image: string,
      public quantity: number
  ) { }
  styleUrls: ['./food-list.component.css']
}

export const todayFoodList: Array<Food> = [];

export const foodList: Array<Food> = [
  new Food("Pizza",400,"https://i.imgur.com/eTmWoAN.png",0),
  new Food("Salad",150,"https://i.imgur.com/DupGBz5.jpg",0),
  new Food("Sweet Potato",120,"https://i.imgur.com/hGraGyR.jpg",0),
  new Food("Gnocchi", 500,"https://i.imgur.com/93ekwW0.jpg",0),
  new Food("Pot Roast", 350,"https://i.imgur.com/WCzJDWz.jpg",0),
  new Food("Lasagna",750,"https://i.imgur.com/ClxOafl.jpg",0),
  new Food("Hamburger",400,"https://i.imgur.com/LoG39wK.jpg",0),
  new Food("Pad Thai",475,"https://i.imgur.com/5ktcSzF.jpg",0),
  new Food("Almonds",75,"https://i.imgur.com/JRp4Ksx.jpg",0),
  new Food("Bacon",175,"https://i.imgur.com/7GlqDsG.jpg",0),
  new Food("Hot Dog",275,"https://i.imgur.com/QqVHdRu.jpg",0),
  new Food("Chocolate Cake",490,"https://i.imgur.com/yrgzA9x.jpg",0),
  new Food("Wheat Bread",175,"https://i.imgur.com/TsWzMfM.jpg",0),
  new Food("Orange",85,"https://i.imgur.com/abKGOcv.jpg",0),
  new Food("Banana",175,"https://i.imgur.com/BMdJhu5.jpg",0),
  new Food("Yogurt",125,"https://i.imgur.com/URhdrAm.png",0)
];


