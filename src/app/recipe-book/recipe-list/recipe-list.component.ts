import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Spaghetti Bolognese', 'Delicious italian staple', 'https://recipetineats.com/wp-content/uploads/2018/07/Spaghetti-Bolognese.jpg')
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
