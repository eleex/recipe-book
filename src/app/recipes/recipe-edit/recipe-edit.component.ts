import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { RecipeService } from './../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
})
export class RecipeEditComponent implements OnInit {
  index: number;
  editMode = false;
  recipeForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.index = +params.id;
      this.editMode = !!params.id;
      this.initForm();
    });
  }

  onSubmit(): void {
    console.log(
      (this.recipeForm.get('ingredients') as FormArray).controls[0].get(
        'amount'
      )
    );
  }

  onAddIngredient(): void {
    (this.recipeForm.get('ingredients') as FormArray).push(
      new FormGroup({
        name: new FormControl(null, [Validators.required]),
        amount: new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/),
        ]),
      })
    );
  }

  private initForm(): void {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    const recipeIngredients: FormGroup[] = [];

    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.index);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
      if (recipe.ingredients) {
        recipeIngredients.push(
          ...recipe.ingredients.map((ingredient) => {
            return new FormGroup({
              name: new FormControl(ingredient.name, [Validators.required]),
              amount: new FormControl(ingredient.amount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/),
              ]),
            });
          })
        );
      }
    }

    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName, [Validators.required]),
      imagePath: new FormControl(recipeImagePath, [Validators.required]),
      description: new FormControl(recipeDescription, [Validators.required]),
      ingredients: new FormArray(recipeIngredients),
    });
  }
}
