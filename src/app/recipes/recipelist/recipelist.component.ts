import { Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import { RecipeService } from '../recipe.service';
@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit {
  recipes: Recipe[] = [];
  constructor(private _recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipes = this._recipeService.getRecipes()
  }
}
