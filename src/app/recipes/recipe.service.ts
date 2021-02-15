import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
    
    recipeSelected=new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('A test Recipe', 'This is simply a test', 
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563'
        , [new Ingredient('Meat', 5), new Ingredient('Pomes Frites',15)]),
        new Recipe('Another One Recipe', 'This is simply a test number two', 
        'https://images-gmi-pmc.edge-generalmills.com/6f24c27b-ff0c-4112-94ca-1c1e82a4cfdc.jpg',
        [new Ingredient('Potato', 5), new Ingredient('Milk',5)])

    ];

    constructor(private shoppingListService:ShoppingListService){}
    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients:Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
    }

}
