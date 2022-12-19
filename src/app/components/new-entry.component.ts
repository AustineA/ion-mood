import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'new-entry-component',
  template: `
    <ion-content class="ion-padding">
      <div class="hero">
        <p>On the scale of Awesome - Awful!</p>
        <h1>Rate your day</h1>
        <span>
          <ion-icon name="calendar-outline" color="mood"></ion-icon> 19 Dec 22,
          12:50 pm</span
        >
      </div>
      <div class="mood-cells">
        <div *ngFor="let mood of moods" class="cell">
          {{ mood?.emoji }}
          <span>
            {{ mood?.mood }}
          </span>
        </div>
      </div>
      <div class="note">
        <ion-textarea
          name="note"
          [(ngModel)]="note"
          placeholder="Leave a note for your self..."
          class="paper-addictional-note"
        ></ion-textarea>
      </div>
    </ion-content>
  `,
  styles: [
    `
      h1,
      p {
        margin: 0;
      }

      .hero {
        margin-top: 30%;
        text-align: center;
        font-size: 16px;
        color: #696969;
      }

      h1 {
        color: #000;
        font-size: 40px;
        font-weight: bold;
      }

      .hero span {
        color: #7eb527;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
        margin-top: 20px;
        font-weight: bold;
      }

      .cell {
        margin-top: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        font-size: 50px;
      }

      .cell span {
        font-size: 12px;
      }

      .mood-cells {
        margin-top: 20px;
        display: flex;
        gap: 15px;
        justify-content: space-between;
      }

      .note {
        margin-top: 50px;
      }

      ion-textarea,
      ion-textarea > textarea {
        height: 140px !important;
        --height: 140px !important;
      }

      ion-textarea {
        border: 1px solid #000000;
        border-radius: 15px;
      }
    `,
  ],
})
export class NewEntryComponent implements OnInit {
  note: string;

  moods = [
    {
      emoji: '😆',
      count: 5,
      color: '#CCFFED',
      mood: 'Awesome!',
      date: '',
    },
    {
      emoji: '😊',
      count: 3,
      color: '#E3FEB8',
      mood: 'Good!',
    },
    {
      emoji: '😐',
      count: 6,
      color: '#D8E5EF',
      mood: 'Meh',
    },
    {
      emoji: '😢',
      count: 2,
      color: '#F5DFC9',
      mood: 'Bad',
    },
    {
      emoji: '😣',
      count: 1,
      color: '#F4C2C4',
      mood: 'Awful',
    },
  ];
  constructor() {}

  ngOnInit() {}
}

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [NewEntryComponent],
  exports: [NewEntryComponent],
})
export class NewEntryModule {}
