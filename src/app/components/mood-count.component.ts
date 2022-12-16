import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'mood-count-component',
  template: `
    <div class="card mood-count ion-padding">
      <div>
        <div>
          <div class="longest-streak">
            <h3>Mood Count</h3>
            <div class="chart"></div>
          </div>
          <div class="mood-cells">
            <div *ngFor="let mood of moods" class="cell">
              {{ mood?.emoji }}
              <span>
                {{ mood?.count }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .chart {
        margin: 20px 0;
      }
      .mood-count {
        background: #f0fffa;
      }

      h3 {
        margin: 0;
        font-size: 18px;
        font-weight: 700;
        text-align: center;
      }

      .longest-streak {
        border-bottom: 1px solid #dff2ec;
      }

      .cell {
        font-size: 30px;
        font-size: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }

      .cell > span {
        font-size: 13px;
        font-weight: bold;
      }

      .mood-cells {
        margin-top: 20px;
        display: flex;
        gap: 15px;
        justify-content: space-between;
      }
    `,
  ],
})
export class MoodCountComponent implements OnInit {
  moods = [
    {
      emoji: '😆',
      count: 5,
    },
    {
      emoji: '😊',
      count: 3,
    },
    {
      emoji: '😐',
      count: 6,
    },
    {
      emoji: '😢',
      count: 2,
    },
    {
      emoji: '😆',
      count: 1,
    },
    {
      emoji: '😆',
      count: 4,
    },
  ];
  constructor() {}

  ngOnInit() {}
}

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [MoodCountComponent],
  exports: [MoodCountComponent],
})
export class MoodCountModule {}
