import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { GameComponent } from './game/game.component';
import { LobbyComponent } from './lobby/lobby.component';
import { PlayerComponent } from './player/player.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MultiplayerComponent } from './multiplayer/multiplayer.component';
import { ScoreComponent } from './score/score.component';
import { OptionsComponent } from './options/options.component';
import {FormsModule} from "@angular/forms";
import { DeckComponent } from './deck/deck.component';
import {RxStompService} from "../websocket/rx-stomp.service";
import {rxStompServiceFactory} from "../websocket/rx-stomp-service-factory";
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    GameComponent,
    LobbyComponent,
    PlayerComponent,
    NavbarComponent,
    MultiplayerComponent,
    ScoreComponent,
    OptionsComponent,
    DeckComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [{
    provide: RxStompService, useFactory: rxStompServiceFactory
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
