![Ironhack logo](https://i.imgur.com/1QgrNNw.png)

# Angular | IronNutrition

## Introduction

After weeks of working on code at Ironhack, and putting on the dreaded Ironhack 15, we've discovered that healthy nutrition is not an underrated part of life.

Our solution: A Nutrition App.

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_0e106e84e22155f1d2775e37cd4aa865.gif)

## Requirements

- [Fork this repo](https://guides.github.com/activities/forking/)
- Clone this repo into your `~/code/labs`
- You must use at least 1 of each of the following:
  - `component`
  - `pipe`
  - `ngFor`
  - `ngIf`
  - `ngModel`

In the starter code, we've provided a list of foods in the form of a TypeScript array of objects. This has already been imported in the pre-generated foods-list component.

## Submission

Upon completion, run the following commands
```
$ git add .
$ git commit -m "done"
$ git push origin master
```
Navigate to your repo and create a Pull Request -from your master branch to the original repository master branch.

In the Pull request name, add your name and last names separated by a dash "-"

## Instructions

### Iteration 1 | Display Foods

In the `app-food-list` component, display a list of the foods. This should include the food's image, its name, and its calorie count.

Notice, we've already imported an array of objects containing food into the component.

**Make sure the image's src property is properly bound.**

### Iteration 2 | Search Foods

Create an input box to search through the foods by name.

You're going to need to generate a custom *pipe* to do this. Reference the example from the lesson on pipes, as it will be very similar.

### Iteration 3 | Add New Foods

Create a button to add new foods.

When a user clicks the button, a form will appear with fields for a name, calories, and image.

When the user clicks submit, the food will be added to the new food list.

When the user clicks the submit button, or when they click add food again the form should disappear.

### Iteration 4 | Today's Foods List

Create a button on each item. When a user clicks the button it should be added to a list of foods which are "today's foods".

Somewhere on the page, display a list of today's foods, with a total calorie count.

### Bonus | Quantities

In addition to the "Add to today's list" button, create an input for quanitity. Whenever a user enters a quanitity into the input, you should add that many of the item to their list.

The default quanitity should be 1.

**Super Bonus**

If the user has added more than 1 item of the same type to their list, don't add it twice. Instead, display the item's name, and the number of times it has been added.

For instance:

- `Banana x2`
- `Salmon x5`
- `Cake`
