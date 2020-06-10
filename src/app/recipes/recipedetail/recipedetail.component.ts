import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipedetail',
  templateUrl: './recipedetail.component.html',
  styleUrls: ['./recipedetail.component.css']
})
export class RecipedetailComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor(private _recipeSerice: RecipeService) { }

  ngOnInit(): void {
  }

  onAddToShoppingList() {
    this._recipeSerice.addIngredientToShoppingList(this.recipe.ingredients)
  }

}
