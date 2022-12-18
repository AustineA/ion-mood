import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import {
  differenceInDays,
  endOfMonth,
  isSameDay,
  parseISO,
  eachDayOfInterval,
  startOfMonth,
  parse,
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

              <!-- <div *ngIf="moodDay(day)" [class]="'isMood'"></div> -->
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
        position: relative;
        border: 1px solid #343537;
        border-radius: 3px;
        display: flex;
        align-items: center;
        justify-content: center;

        width: 15px;
        height: 15px;
      }

      .isMood {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: red;
        top: 0;
        left: 0;
      }
    `,
  ],
})
export class CalendarComponent implements OnInit {
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

  ngOnInit() {
    // this.diffInDays(1);
  }

  moodDay(day: Date) {
    return this.entries.some((item) => {
      if (isSameDay(parseISO(item?.date), day)) {
        return item;
      }

      return false;
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
