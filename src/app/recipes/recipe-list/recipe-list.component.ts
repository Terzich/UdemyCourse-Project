import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes:Recipe[]=[
    new Recipe('A test Recipe','This is simply a test','https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563'),
    new Recipe('Another One Recipe','This is simply a test number two','https://images-gmi-pmc.edge-generalmills.com/6f24c27b-ff0c-4112-94ca-1c1e82a4cfdc.jpg')

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
