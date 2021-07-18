import { Component } from '@angular/core';
import { Card } from './card/card.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cards: Card[] = [];

  addItem() {
    if(this.cards?.length === 10) {
      alert('You are not able to add new cards your limit reached')
    } else {
      this.cards.push(new Card());
    }
  }
  remove() {
    this.cards.shift()
  }
  removeAll() {
    this.cards = []
  }
}
