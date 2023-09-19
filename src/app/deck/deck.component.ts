import { Component, Input } from '@angular/core';
import { Player } from "../../models/player";
import { Card } from "../../models/card";
import { Deck } from "../../models/deck";

@Component({
  selector: 'deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css']
})
export class DeckComponent {

  @Input() public deck!: Deck;
  @Input() public hidden : boolean = false;

}
