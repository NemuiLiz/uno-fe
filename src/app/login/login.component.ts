import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from "rxjs";
import { Player} from "../../models/player";
import { Message } from "@stomp/stompjs";
import { RxStompService } from "../../websocket/rx-stomp.service";
import {Game} from "../../models/game";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy{

  private topicSubscriptionLobby!: Subscription;
  private topicSubscriptionGame!: Subscription;
  public player: Player[] = [];

  constructor(private rxStompService: RxStompService, private router: Router) { }

  public playerName: string = "";

  login() {
    this.rxStompService.publish({
      destination: "/app/addPlayer",
      body: this.playerName
    })
    this.playerName = '';
  }

  startGame() {
    this.rxStompService.publish({
      destination: "/app/startGame",
      body: undefined
    });
  }

  ngOnInit() {
    this.topicSubscriptionLobby = this.rxStompService
      .watch('/topic/lobby')
      .subscribe((message: Message) => {
        this.player = (JSON.parse(message.body));
      });
    this.topicSubscriptionGame = this.rxStompService
      .watch('/topic/game')
      .subscribe((message: Message) => {
        const game: Game = JSON.parse(message.body);
        this.router.navigate(['/game', game.id]);
      });
  }

  ngOnDestroy() {
    this.topicSubscriptionLobby.unsubscribe();
    this.topicSubscriptionGame.unsubscribe();
  }

}
