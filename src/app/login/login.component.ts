import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";
import {Player} from "../../models/player";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private http: HttpClient) { }

  addPlayer(): Observable<Player> {
    const player: Player = {id: null, name: this.playerName, cards:[], points: 0};
    return this.http.post <Player>("http://localhost:8080/players", {player});
  }


  public playerName: string = "";

  login() {
    console.log(this.playerName);

  }

}
