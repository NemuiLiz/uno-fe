import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from "rxjs";
import { Player} from "../../models/player";
import { Message } from "@stomp/stompjs";
import { RxStompService } from "../../websocket/rx-stomp.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy{

  private topicSubscription!: Subscription;
  public player!: Player[];

  constructor(private rxStompService: RxStompService) { }

  public playerName: string = "";

  login() {
    this.rxStompService.publish({
      destination: "/app/addPlayer",
      body: JSON.stringify(this.playerName)
    })
  }

  startGame() {

  }

  ngOnInit() {
    this.topicSubscription = this.rxStompService
      .watch('/topic/lobby')
      .subscribe((message: Message) => {
        this.player = (JSON.parse(message.body));
      });
  }

  ngOnDestroy() {
    this.topicSubscription.unsubscribe();
  }

}
