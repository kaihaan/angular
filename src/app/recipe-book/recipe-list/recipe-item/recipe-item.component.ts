import { EventEmitter } from '@angular/core';
import { Recipe } from '../../../shared/recipe.model';
import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe
  @Output() recipeClicked = new EventEmitter<Recipe>()

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeItemClick() {
    console.log('Click - in Recipe Item')
    this.recipeClicked.emit(this.recipe)
  }

}
