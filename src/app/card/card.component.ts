import { Component, OnInit, Inject, Input } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class Card implements OnInit {
  constructor() {
  }
  @Input() i = 0
  ngOnInit(): void { }

}
