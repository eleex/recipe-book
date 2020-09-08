import { Recipe } from './../recipes/recipe.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RecipeService } from './../recipes/recipe.service';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  storeRecipes(): void {
    const recipes: Recipe[] = this.recipeService.getRecipes();

    this.http
      .put<Recipe[]>(
        'https://ng-recipe-book-e3a68.firebaseio.com/recipes.json',
        recipes
      )
      .subscribe((response) => {
        console.log(response);
      });
  }

  fetchRecipes(): void {
    this.http
      .get<Recipe[]>('https://ng-recipe-book-e3a68.firebaseio.com/recipes.json')
      .subscribe((recipes) => {
        this.recipeService.setRecipes(recipes);
      });
  }
}
