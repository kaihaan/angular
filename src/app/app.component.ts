import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  showPage: string = 'recipes'

  onShowPage(event) {
    // either recipes OR shopping-list
    this.showPage = event
  }

}
