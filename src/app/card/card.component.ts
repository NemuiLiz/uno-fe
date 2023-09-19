import {Component, Input} from '@angular/core';
import {Card} from "../../models/card";
import {Numeration} from "../../models/numeration";
import {SpecialEffect} from "../../models/specialEffect";

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() public card!: Card;
  @Input() public hidden: boolean = false;

  path: string = './assets/cards/';

  getPath(): String {
    if (this.hidden) {
      return this.path + `back.svg`;
    }
    if (this.card.numeration == Numeration.SPECIAL_EFFECT) {
      switch (this.card.specialEffect) {
        case SpecialEffect.COLOR_WISH:
          return this.path + 'wild.svg';
        case SpecialEffect.DRAW_FOUR_COLOR_WISH:
          return this.path + 'wild-draw_four.svg';
        case SpecialEffect.SKIP:
          return this.path + this.card.color.toLowerCase() + '-skip.svg';
        case SpecialEffect.DRAW_TWO:
          return this.path + this.card.color.toLowerCase() + '-draw_two.svg';
        case SpecialEffect.REVERSE:
          return this.path + this.card.color.toLowerCase() + '-reverse.svg';
      }
    }
    return this.path + `${this.card.color.toLowerCase()}-${this.card.numeration}.svg`;
  }
}
