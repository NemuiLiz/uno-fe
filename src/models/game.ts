import {Player} from "./player";
import {Card} from "./card";

export interface Game {
  players: Player[];          // List of players in the game
  currentPlayerId: number;    // ID of the current player
  drawPile: Card[];           // The pile of remaining cards to draw from
  discardPile: Card[];        // The pile of discarded cards
}
