import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
 @ViewChild('nameInput') nameInput:ElementRef;
 @ViewChild('amountInput') amountInput:ElementRef;

  constructor(private shoplistservice:ShoppingListService) { }

  ngOnInit(): void {
  }

  onaddItem(){
   const newIngre=new Ingredient(this.nameInput.nativeElement.value,this.amountInput.nativeElement.value);
  this.shoplistservice.addIngredient(newIngre);
  }

}
