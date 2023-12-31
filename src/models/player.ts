import { Card } from "./card";

export interface Player {
  id: number | null;           // Unique identifier for the player
  name: string;         // Player's name
  cards: Card[];         // Player's current hand of cards
  points: number;
}
