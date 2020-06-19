import { EventEmitter } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
import { Recipe } from '../../shared/recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeClicked = new EventEmitter<Recipe>()

  recipes: Recipe[] = [
    new Recipe('Spaghetti Bolognese', 'Delicious italian staple', 'https://recipetineats.com/wp-content/uploads/2018/07/Spaghetti-Bolognese.jpg'),
    new Recipe('BratWurst', 'Hrrible German Nastiness', 'https://recipetineats.com/wp-content/uploads/2018/07/Spaghetti-Bolognese.jpg')
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeClicked(recipe: Recipe) {
    console.log('Click - in Recipe List')
    this.recipeClicked.emit(recipe)
  }

}
