import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GameComponent} from "./game/game.component";
import {MultiplayerComponent} from "./multiplayer/multiplayer.component";
import {ScoreComponent} from "./score/score.component";
import {OptionsComponent} from "./options/options.component";
import {LobbyComponent} from "./lobby/lobby.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  { path: '', component: LobbyComponent},
  { path: 'login', component: LoginComponent},
  { path: 'login/game', component: GameComponent},
  { path: 'multiplayer', component: MultiplayerComponent},
  { path: 'score', component: ScoreComponent},
  { path: 'options', component: OptionsComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
