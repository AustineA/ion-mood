import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'streak-component',
  template: `
    <div class="card streak-card ion-padding">
      <div>
        <div class="longest-streak">
          <h3>Longest Streak</h3>
          <div class="entry-cells">
            <span
              *ngFor="let entry of entries"
              class="cell"
              [ngClass]="{ filled: entry }"
            >
            </span>
          </div>
        </div>
        <div class="streak-meta">
          <p>🏆 <span>4</span> Days in a Row</p>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .streak-meta > p {
        font-size: 15px;
        text-align: center;
        margin-bottom: 0;
      }

      .streak-meta span {
        font-weight: bold;
      }
      .longest-streak {
        border-bottom: 1px solid rgba(126, 181, 39, 0.23);
      }

      .cell {
        width: 28px;
        height: 28px;
        border: 2px solid #000000;
        border-radius: 5px;
      }

      .entry-cells {
        margin: 20px 0;
        display: flex;
        gap: 15px;
        justify-content: center;
      }
      .streak-card {
        background: #effdda;
      }

      h3 {
        margin: 0;
        font-size: 18px;
        font-weight: 700;
        text-align: center;
      }

      .filled {
        background: #7eb527;
        border: 2px solid #7eb527;
      }
    `,
  ],
})
export class StreakComponent implements OnInit {
  entries = [false, true, true, true, false, true, false];
  constructor() {}

  ngOnInit() {}
}

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [StreakComponent],
  exports: [StreakComponent],
})
export class StreakModule {}
