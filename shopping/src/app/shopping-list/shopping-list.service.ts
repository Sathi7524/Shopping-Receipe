import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService{
   private  ingredients:Ingredient[]=[
        new Ingredient("apple",6),
        new Ingredient("pineapple",7),
        new Ingredient("tomato",9)
      ];
      ingrechanged=new EventEmitter<Ingredient[]>();
  getIngredients(){
    return this.ingredients.slice();
  }
  addIngredient(ingred:Ingredient){
     this.ingredients.push(ingred);
     this.ingrechanged.emit(this.ingredients.slice());
  }
  addIngredients(ingredient:Ingredient[]){
    this.ingredients.push(...ingredient);
    this.ingrechanged.emit(this.ingredients.slice());
  }
}