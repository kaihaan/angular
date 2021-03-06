import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Spinach', 2),
  ]


  constructor() { }

  ngOnInit(): void {
  }

  onAction(actionMsg: {action: string, payload: Ingredient}) {
    if(actionMsg.action === 'add') {
      this.ingredients.push(actionMsg.payload)
    }
  }

}
