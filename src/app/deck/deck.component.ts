import {ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Deck} from "../../models/deck";

@Component({
  selector: 'deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeckComponent implements OnChanges {

  @Input() public deck!: Deck;
  @Input() public hidden : boolean = false;

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

}
