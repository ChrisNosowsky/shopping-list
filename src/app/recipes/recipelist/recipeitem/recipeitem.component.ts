import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Recipe} from '../../recipe.model';
@Component({
  selector: 'app-recipeitem',
  templateUrl: './recipeitem.component.html',
  styleUrls: ['./recipeitem.component.css']
})
export class RecipeitemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }

  onClickRecipe(recipe: Recipe) {
    this.recipeSelected.emit(recipe)
  }
}
