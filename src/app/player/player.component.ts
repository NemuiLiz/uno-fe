import {Component, Input} from '@angular/core';
import {Player} from "../../models/player";

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent {

  @Input() public player! : Player;
  @Input() public isEnemy : boolean = false;


}
