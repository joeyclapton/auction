import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-birthday',
  templateUrl: './birthday.component.html',
  styleUrls: ['./birthday.component.sass']
})
export class BirthdayComponent {
  @Input() birthday: Date = new Date();
}
