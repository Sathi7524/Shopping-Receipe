import { Component, Input, OnInit } from '@angular/core';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Receipe } from '../receipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-receipe-detail',
  templateUrl: './receipe-detail.component.html',
  styleUrls: ['./receipe-detail.component.css']
})
export class ReceipeDetailComponent implements OnInit {
  @Input() recipe:Receipe;
  constructor(private recipeservice:RecipeService,private shopservice:ShoppingListService) { }

  ngOnInit(): void {
  }
  sendtoshopping(){
    console.log(this.recipe.ingredients);
  this.shopservice.addIngredients(this.recipe.ingredients);
  }
}
