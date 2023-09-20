import {RxStomp } from "@stomp/rx-stomp";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class RxStompService extends RxStomp {
  constructor() {
    super();
  }
}
