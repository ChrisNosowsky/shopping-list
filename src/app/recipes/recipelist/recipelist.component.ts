import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';
@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is a test', 'https://www.cscassets.com/recipes/wide_cknew/wide_32.jpg'),
    new Recipe('A test recipe', 'This is a test', 'https://www.cscassets.com/recipes/wide_cknew/wide_32.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
