import { CommonModule } from '@angular/common';
import { Component, Input, NgModule, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'moodcard-component',
  template: `
    <div class="card ion-padding" [style]="'background: ' + entry.color">
      <div class="mood-body">
        <div class="mood-emoji">{{ entry.emoji }}</div>
        <div class="mood-content">
          <div class="mood-meta">
            <h3>{{ entry.mood }}</h3>
            <span>{{ entry.date }}</span>
          </div>
          <div class="mood-note">
            <p>{{ entry.note }}</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .mood-emoji {
        font-size: 50px;
        line-height: 50px;
      }
      .mood-body {
        display: flex;
        justify-content: space-between;
        gap: 10px;
      }

      .mood-meta {
        display: flex;
        justify-content: space-between;
        margin-bottom: 15px;
        /* font-family: 'Tinos', serif; */
      }

      .mood-meta h3 {
        font-size: 14px;
        font-weight: bold;
        margin: 0;
      }

      .mood-meta span {
        color: #696969;
        font-size: 12px;
      }

      .mood-content {
        width: 85%;
      }
      .mood-note > p {
        color: #585858;
      }
    `,
  ],
})
export class MoodCardComponent implements OnInit {
  @Input() entry: any;

  constructor() {}

  ngOnInit() {}
}

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [MoodCardComponent],
  exports: [MoodCardComponent],
})
export class MoodCardModule {}
