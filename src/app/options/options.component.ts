import { Component } from '@angular/core';
import {FullscreenService} from "../fullscreen.service";
import {SoundService} from "../sound.service";

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent {

  //Fullscreen
  fullScreen: boolean = false;

  soundEnabled: boolean = true;

  constructor(private fullscreenService: FullscreenService, private soundService: SoundService) {
    this.fullScreen = this.fullscreenService.isFullscreen;
    //this.soundEnabled = this.soundService.isSoundEnabled();
  }

  toggleFullscreen() {
    this.fullscreenService.toggleFullscreen();
    this.fullScreen = this.fullscreenService.isFullscreen;
  }

  toggleSound() {
    this.soundService.toggleSound();
    //this.soundEnabled = this.soundService.isSoundEnabled();
  }

  testSound() {
    this.soundService.playSound();
  }


}
