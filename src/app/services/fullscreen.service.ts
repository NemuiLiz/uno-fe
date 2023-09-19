import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FullscreenService {
  isFullscreen: boolean = false;

  constructor() {
  }

  toggleFullscreen() {
    if (!this.isFullscreen) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
    this.isFullscreen = !this.isFullscreen;
  }
}

