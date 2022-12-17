import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import {
  differenceInDays,
  endOfMonth,
  endOfWeek,
  startOfMonth,
} from 'date-fns';

@Component({
  selector: 'calendar-component',
  template: `
    <div>
      <div class="months">
        <div
          *ngFor="let month of [].constructor(months); let i = index"
          class="month"
        >
          <div
            *ngFor="
              let day of [].constructor(diffInDays(i));
              let _index = index
            "
            class="day"
          >
            <div>
              {{ _index + 1 }}
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .months {
        display: flex;
        justify-content: center;
        gap: 5px;
        font-size: 8px;
        font-weight: bold;
        /* height: 13px; */
      }

      .month {
        display: flex;
        flex-direction: column;
        gap: 5px;
      }
      .day {
        border: 1px solid #343537;
        border-radius: 3px;
        display: flex;
        align-items: center;
        justify-content: center;

        width: 15px;
        height: 15px;
      }
    `,
  ],
})
export class CalendarComponent implements OnInit {
  months = 12;
  constructor() {}

  ngOnInit() {
    this.diffInDays(1);
  }

  setMonth(month: number) {
    const d = new Date();
    d.setMonth(month);
    return d;
  }

  endMonth(date: Date) {
    return endOfMonth(date);
  }

  startMonth(date: Date) {
    return startOfMonth(date);
  }

  diffInDays(month) {
    let dateMonth = this.setMonth(month);
    let d = differenceInDays(
      this.endMonth(dateMonth),
      this.startMonth(dateMonth)
    );

    console.log(d + 1);
    return d + 1;
  }
}

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [CalendarComponent],
  exports: [CalendarComponent],
})
export class CalendarModule {}
