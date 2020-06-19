import { Recipe } from '../../shared/recipe.model';
import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit, OnChanges {
  @Input() recipe: Recipe

  constructor() { }

  ngOnInit(): void {
    this.recipe = new Recipe(null, null, null)
  }

  ngOnChanges() {
    console.log('Detail recieved ')
    console.dir(this.recipe)
  }
}
