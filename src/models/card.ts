import {Color} from "./color";
import {Numeration} from "./numeration";
import {SpecialEffect} from "./specialEffect";

export interface Card {
  id: number;           // Unique identifier for the card
  color: Color;        // Color of the card (e.g., "red", "blue", "green", "yellow")
  numeration: Numeration;  // Value of the card (e.g., "skip", "reverse", "2", "3", "wild")
  specialEffect: SpecialEffect;
}
