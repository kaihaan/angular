import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent {
  collapsed = true
  @Output() showPage = new EventEmitter<string>()


  showRecipes() {
    this.showPage.emit('recipes')
  }

  showShoppingList() {
    this.showPage.emit('shopping-list')
  }
}
