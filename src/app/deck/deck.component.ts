import {Component, Input} from '@angular/core';
import {Deck} from "../../models/deck";

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css']
})
export class DeckComponent {

  @Input() public deck!: Deck;
  @Input() public hidden : boolean = false;

}
