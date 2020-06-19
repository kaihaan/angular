import { Recipe } from '../shared/recipe.model';
import { Component } from '@angular/core'

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css']
})

export class RecipeBook {
  recipe: Recipe

  onRecipeClicked(recipe: Recipe) {
    console.log('Click - in Recipe Book')
    this.recipe = recipe
  }

}
