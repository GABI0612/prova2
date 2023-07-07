import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prova2';
  shoppingList: string[] = [];

  onItemAdded(item: string){
    this.shoppingList.push(item)
  }
  }
