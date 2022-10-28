import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Receipe } from '../../receipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-receipe-item',
  templateUrl: './receipe-item.component.html',
  styleUrls: ['./receipe-item.component.css']
})
export class ReceipeItemComponent implements OnInit {
  @Input() recipe:Receipe;

  constructor(private recipeservice:RecipeService) { }

  ngOnInit(): void {
  }
  onSelected(){
    console.log("item selected in receipe-item");
    this.recipeservice.recipeSelected.emit(this.recipe);

    

  }
}
