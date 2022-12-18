import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import {
  differenceInDays,
  endOfMonth,
  isSameDay,
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
            <div
              *ngIf="moodDay(_index + 1, i + 1); let mood"
              [class]="'isMood ' + 'mood-' + mood?.rate"
            ></div>
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
        position: relative;
        border: 1px solid #343537;
        border-radius: 3px;
        display: flex;
        align-items: center;
        justify-content: center;

        width: 15px;
        height: 15px;
      }

      .day:has(.mood-1) {
        background-color: #ccffed;
        border: 1px solid #ccffed;
      }
      .day:has(.mood-2) {
        background-color: #e3feb8;
        border: 1px solid #e3feb8;
      }
      .day:has(.mood-3) {
        background-color: #d8e5ef;
        border: 1px solid #d8e5ef;
      }
      .day:has(.mood-4) {
        background-color: #f5dfc9;
        border: 1px solid #f5dfc9;
      }
      .day:has(.mood-5) {
        background-color: #f4c2c4;
        border: 1px solid #f4c2c4;
      }
    `,
  ],
})
export class CalendarComponent implements OnInit {
  thisYear = new Date().getFullYear();
  entries = [
    {
      color: '#CCFFED',
      rate: 1,
      date: '2022-01-01',
    },
    {
      color: '#E3FEB8',
      rate: 2,
      date: '2022-02-01',
    },
    {
      color: '#D8E5EF',
      rate: 3,
      date: '2022-03-01',
    },
    {
      color: '#F5DFC9',
      rate: 4,
      date: '2022-04-01',
    },
    {
      color: '#F4C2C4',
      rate: 5,
      date: '2022-05-01',
    },
    {
      color: '#F4C2C4',
      rate: 5,
      date: '2022-05-10',
    },
    {
      color: '#F4C2C4',
      rate: 3,
      date: '2022-06-01',
    },
    {
      color: '#F4C2C4',
      rate: 2,
      date: '2022-07-01',
    },
    {
      color: '#F4C2C4',
      rate: 4,
      date: '2022-08-01',
    },
    {
      color: '#F4C2C4',
      rate: 1,
      date: '2022-09-01',
    },
    {
      color: '#F4C2C4',
      rate: 5,
      date: '2022-10-01',
    },
    {
      color: '#F4C2C4',
      rate: 3,
      date: '2022-11-01',
    },
    {
      color: '#F4C2C4',
      rate: 1,
      date: '2022-12-01',
    },
  ];

  months = 12;
  constructor() {}

  ngOnInit() {}

  moodDay(day: number, month: number) {
    const date = `${this.thisYear}-${month}-${day}`;

    return this.entries.find((item) => {
      return isSameDay(new Date(item?.date), new Date(date));
    });
  }

  setMonth(month: number) {
    const m = new Date();
    m.setMonth(month);
    return m;
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
    return d + 1;
  }
}

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [CalendarComponent],
  exports: [CalendarComponent],
})
export class CalendarModule {}
