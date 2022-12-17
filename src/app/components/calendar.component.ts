import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'calendar-component',
  template: `
    <div>
      <div>
        <h1>Hello</h1>
        <div *ngFor="let month of [].constructor(months); let i = index">
          {{ i }}
        </div>
      </div>
    </div>
  `,
  styles: [``],
})
export class CalendarComponent implements OnInit {
  months = 12;
  constructor() {}

  ngOnInit() {}
}

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [CalendarComponent],
  exports: [CalendarComponent],
})
export class CalendarModule {}
