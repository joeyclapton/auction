import { Component } from '@angular/core';
import { Observable, Observer, timeout } from 'rxjs';
import { IMusic } from '../interfaces/imusic';

@Component({
  selector: 'app-hot-observer',
  templateUrl: './hot-observer.component.html',
  styleUrls: ['./hot-observer.component.sass']
})
export class HotObserverComponent {

  constructor() {
    this.coldObservable();
  }

  musicInfo: IMusic = {
    name: 'Música A',
    artist: 'Artista X',
    duration: '4:30',
  }

  coldObservable() {
    const music = new Observable<IMusic>(observer => {
      observer.next(this.musicInfo);

      const updateTime = { ...this.musicInfo, duration: '4:45' }

      setTimeout(() => {
        observer.next(updateTime)
      }, 2000)
    })

    music.subscribe(({ name, artist, duration }) => {
      console.log(`Reproduzindo 01: ${name} - ${artist} (${duration})`);
    });

    setTimeout(() => {
      music.subscribe(({ name, artist, duration }) => {
        console.log(`Reproduzindo 02: ${name} - ${artist} (${duration})`);
      });
    }, 1000);

  }

}
