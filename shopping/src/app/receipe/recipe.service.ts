import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Receipe } from "./receipe.model";

export class RecipeService{
   private receipes:Receipe[]=[
        new Receipe("spagetti","noodeles family","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpuZdTT5J4LqUXjNSW9LFHJW9chpJEmDLW6pOjuJ4DlyQgTx1pYy-iUsu_T32sWqLphWs&usqp=CAU",[new Ingredient('tomato',2),new Ingredient('tomato',2)]),
        new Receipe("spagetti2","noodeles family2","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpuZdTT5J4LqUXjNSW9LFHJW9chpJEmDLW6pOjuJ4DlyQgTx1pYy-iUsu_T32sWqLphWs&usqp=CAU",[new Ingredient('mirchi',2)]),
        new Receipe("spagetti3","noodeles family3","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpuZdTT5J4LqUXjNSW9LFHJW9chpJEmDLW6pOjuJ4DlyQgTx1pYy-iUsu_T32sWqLphWs&usqp=CAU",[new Ingredient('sauce',2)]),
        new Receipe("spagetti4","noodeles family4","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpuZdTT5J4LqUXjNSW9LFHJW9chpJEmDLW6pOjuJ4DlyQgTx1pYy-iUsu_T32sWqLphWs&usqp=CAU",[new Ingredient('cucumber',2)]),
        new Receipe("spagetti5","noodeles family5","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpuZdTT5J4LqUXjNSW9LFHJW9chpJEmDLW6pOjuJ4DlyQgTx1pYy-iUsu_T32sWqLphWs&usqp=CAU",[new Ingredient('onion',2)]),
        new Receipe("spagetti6","noodeles family6","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpuZdTT5J4LqUXjNSW9LFHJW9chpJEmDLW6pOjuJ4DlyQgTx1pYy-iUsu_T32sWqLphWs&usqp=CAU",[new Ingredient('capsicum',2)]),
        
      ];
      getRecipes(){
        return this.receipes.slice();
      }
      recipeSelected=new EventEmitter<Receipe>();
}