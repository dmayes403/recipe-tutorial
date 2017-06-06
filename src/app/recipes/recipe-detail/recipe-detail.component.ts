import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { Ingredient } from '../../shared/ingredient.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private shoppingListService: ShoppingListService, private recipeService: RecipeService) { }

  ngOnInit() {
  }

  // onAddToShoppingList(ingArr: Ingredient[]){
  //   this.shoppingListService.addingSomeIngredients(ingArr);
  // }

  onAddToShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

}
