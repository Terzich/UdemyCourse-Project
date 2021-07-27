import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
    
    recipesChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
        new Recipe('A test Recipe', 'This is simply a test', 
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563'
        , [new Ingredient('Meat', 5), new Ingredient('Pomes Frites',15)]),
        new Recipe('Another One Recipe', 'This is simply a test number two', 
        'https://images-gmi-pmc.edge-generalmills.com/6f24c27b-ff0c-4112-94ca-1c1e82a4cfdc.jpg',
        [new Ingredient('Potato', 5), new Ingredient('Milk',5)])

    ];

    constructor(private shoppingListService:ShoppingListService){}
    
    getRecipe(index: number) {
        return this.recipes[index];
    }
    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients:Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}
