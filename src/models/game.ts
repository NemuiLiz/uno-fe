import {Player} from "./player";
import {Card} from "./card";
import {Deck} from "./deck";

export interface Game {
  id: number;
  players: Player[];          // List of players in the game
  currentPlayerId: number;    // ID of the current player
  drawPile: Deck;           // The pile of remaining cards to draw from
  discardPile:  Deck;         // The pile of discarded cards
}
