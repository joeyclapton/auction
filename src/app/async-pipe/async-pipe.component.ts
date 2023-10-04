import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { take } from 'rxjs';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-async-pipe',
  templateUrl: './async-pipe.component.html',
  styleUrls: ['./async-pipe.component.sass']
})
export class AsyncPipeComponent {
  numbers$: Observable<number> = interval(1000).pipe(take(10))
}
