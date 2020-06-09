import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({providedIn: 'root'})
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private _recipes: Recipe[] = [new Recipe('A test recipe', 'This is a test', 'https://www.cscassets.com/recipes/wide_cknew/wide_32.jpg'),
    new Recipe('Another test recipe', 'This is a test', 'https://www.cscassets.com/recipes/wide_cknew/wide_32.jpg')];

    getRecipes() {
        return this._recipes.slice(); // copy this._recipes array without accessing it from outside
    }
}