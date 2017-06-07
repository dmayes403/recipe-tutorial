import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Burger',
      'A Tasty burger',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxlLOaL72TMdGUqMMcQz_19ohciswYWxhiZRNK1eLghzmYfQqY',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe(
      'Frech Fries',
      'Some tasty french fries!',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzXPBOwQIvmDXZGnnLaui07uVxt0o0qxsOm1UPfLVwxJ3iu7GICA',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ])
  ];

  constructor(private shoppingListService: ShoppingListService){}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.shoppingListService.addIngredients(ingredients);
  }
}
