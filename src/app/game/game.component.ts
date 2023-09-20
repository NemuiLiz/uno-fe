import {Component, OnInit} from '@angular/core';
import {Color} from "../../models/color";
import {Numeration} from "../../models/numeration";
import {SpecialEffect} from "../../models/specialEffect";
import {Card} from "../../models/card";
import {Player} from "../../models/player";
import {RxStompService} from "../../websocket/rx-stomp.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {Message} from "@stomp/stompjs";
import {Game} from "../../models/game";

@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})


export class GameComponent implements OnInit {

  public gameId!: number;
  public game?: Game;

  private topicSubscriptionGame!: Subscription;
  constructor(private route: ActivatedRoute, private rxStompService: RxStompService) { }

  ngOnInit(): void {
    this.gameId = Number(this.route.snapshot.paramMap.get('id'));
    this.topicSubscriptionGame = this.rxStompService
      .watch('/topic/game/' + this.gameId)
      .subscribe((message: Message) => {
        this.game = JSON.parse(message.body);
      });
    this.rxStompService.publish({
      destination: "/app/getGame/" + this.gameId,
      body: undefined
    });

  }

  giveUp() {

  }

  ngOnDestroy() {
    this.topicSubscriptionGame.unsubscribe();
  }
}
