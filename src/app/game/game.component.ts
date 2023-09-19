import {Component} from '@angular/core';
import {Color} from "../../models/color";
import {Numeration} from "../../models/numeration";
import {SpecialEffect} from "../../models/specialEffect";
import {Card} from "../../models/card";
import {Player} from "../../models/player";

@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {

  card1: Card = {id: 1, color: Color.BLUE, numeration: Numeration.SEVEN, specialEffect: SpecialEffect.NULL};
  card2: Card = {id: 2, color: Color.GREEN, numeration: Numeration.TWO, specialEffect: SpecialEffect.NULL};
  card3: Card = {id: 3, color: Color.RED, numeration: Numeration.SPECIAL_EFFECT, specialEffect: SpecialEffect.SKIP};
  card4: Card = {id: 4, color: Color.RED, numeration: Numeration.SPECIAL_EFFECT, specialEffect: SpecialEffect.DRAW_FOUR_COLOR_WISH};
  card5: Card = {id: 5, color: Color.RED, numeration: Numeration.SPECIAL_EFFECT, specialEffect: SpecialEffect.COLOR_WISH};
  card6: Card = {id: 6, color: Color.RED, numeration: Numeration.SPECIAL_EFFECT, specialEffect: SpecialEffect.DRAW_TWO};
  card7: Card = {id: 7, color: Color.RED, numeration: Numeration.SPECIAL_EFFECT, specialEffect: SpecialEffect.REVERSE};

  cards = [this.card1, this.card2, this.card3,this.card4,this.card5,this.card6,this.card7];
  player1: Player = {id: 1, name: "Anna", points: 20, cards: [this.card1, this.card2, this.card3,this.card4,this.card5,this.card6,this.card7]}
  player2: Player = {id: 1, name: "Lila", points: 40, cards: [this.card1, this.card2, this.card3,this.card4,this.card5]}


  giveUp() {

  }


}
