import { Card } from "./card";

export interface Player {
  id: number;           // Unique identifier for the player
  name: string;         // Player's name
  hand: Card[];         // Player's current hand of cards
  points: number;       // score points
}
