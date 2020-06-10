import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shoppinglist/shoppinglist.service';

@Injectable({providedIn: 'root'})
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private _recipes: Recipe[] = [new Recipe('A test recipe', 'This is a test', 'https://www.cscassets.com/recipes/wide_cknew/wide_32.jpg', 
    [new Ingredient('chicken', 3), new Ingredient('brocolli', 10)]),
    new Recipe('Another test recipe', 'This is a test', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/screen-shot-2020-01-08-at-10-28-05-am-1578498103.png', 
    [new Ingredient('shrimp', 10), new Ingredient('brownie', 1)])];

    constructor(private _shoppingListService: ShoppingListService) {}

    getRecipes() {
        return this._recipes.slice(); // copy this._recipes array without accessing it from outside
    }

    addIngredientToShoppingList(ingredients: Ingredient[]) {
        this._shoppingListService.addIngredients(ingredients)
    }
}