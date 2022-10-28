import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Receipe } from '../receipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-receipes-list',
  templateUrl: './receipes-list.component.html',
  styleUrls: ['./receipes-list.component.css']
})
export class ReceipesListComponent implements OnInit {
  receipes:Receipe[]=[ ];
  //@Output()  recipeWasSelected= new EventEmitter<Receipe>();
  constructor(private recipeservice:RecipeService) { }

  ngOnInit(): void {
    this.receipes=this.recipeservice.getRecipes();  
  }

 // onReceipeSelected(recipe:Receipe){
   // console.log("recipewasselected desc",recipe.imagePath)
  // this.recipeWasSelected.emit(recipe);
  //}

}
