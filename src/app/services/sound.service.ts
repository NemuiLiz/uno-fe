import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SoundService {
  private audio: HTMLAudioElement = new Audio();
  private soundEnabled: boolean = true;

  constructor() {
    // Initialize the audio element with your default sound file
    this.audio.src = 'path_to_default_sound.mp3';
    this.audio.loop = false;
    this.audio.volume = 1.0; // Adjust the volume (0.0 to 1.0)
    this.audio.load();
  }

  toggleSound() {
    this.soundEnabled = !this.soundEnabled;
  }

  playSound() {
    if (this.soundEnabled) {
      this.audio.play();
    }
  }

  setSoundFile(path: string) {
    this.audio.src = path;
    this.audio.load();
  }
}
