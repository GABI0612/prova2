import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  public items: string[] = ['maça', 'banana','laranja', 'morango'];

  public onItemAdded(item:string){
    this.items.push(item);
  }
}
