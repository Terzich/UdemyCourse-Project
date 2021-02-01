import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'UdemyCourse-Project';
  recipeOrSopping:string="recipe";

  changeView(headerToShow:string){
    this.recipeOrSopping=headerToShow;
  }
}
