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
        <div
          *ngFor="let mood of moods; let i = index"
          class="cell"
          (click)="selectMood(i)"
        >
          {{ mood?.emoji }}
          <span [ngClass]="{ 'selected-mood': selected == i }">
            {{ mood?.title }}
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
      <div class="done-btn">
        <ion-button
          expand="block"
          mode="ios"
          color="mood"
          type="submit"
          (click)="done()"
          >Done
        </ion-button>
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
        font-size: 40px;
        padding: 15px;
        overflow: hidden;
      }

      .cell span {
        font-size: 12px;
      }

      .selected-mood {
        padding-bottom: 5px;
        border-bottom: 2px solid #7eb527;
      }

      .mood-cells {
        margin-top: 20px;
        display: flex;
        margin-left: -10px;
        /* justify-content: space-between; */
        align-items: center;
      }

      .note {
        margin-top: 30px;
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

      .done-btn {
        margin-top: 50px;
      }
    `,
  ],
})
export class NewEntryComponent implements OnInit {
  note: string;
  selected: number;
  date: Date;
  modalCtrl;

  moods = [
    {
      emoji: '😆',
      mood: 'An Awesome Day',
      title: 'Awesome',
      note: 'Buy and  sell everything iPhone related.',
      date: '12 Dec. 2022',
      color: '#CCFFED',
    },
    {
      emoji: '😊',
      mood: 'A Good Day',
      title: 'Good',
      note: 'Buy and  sell everything iPhone related.',
      date: '12 Dec. 2022',
      color: '#E3FEB8',
    },
    {
      emoji: '😐',
      mood: 'A Meh Day',
      title: 'Meh',
      note: 'Buy and  sell everything iPhone related.',
      date: '12 Dec. 2022',
      color: '#D8E5EF',
    },
    {
      emoji: '😢',
      mood: 'A Bad Day',
      title: 'Bad',
      note: 'Buy and  sell everything iPhone related.',
      date: '12 Dec. 2022',
      color: '#F5DFC9',
    },
    {
      emoji: '😣',
      mood: 'An Awful Day',
      title: 'Awful',
      note: 'Buy and  sell everything iPhone related.',
      date: '12 Dec. 2022',
      color: '#F4C2C4',
    },
  ];
  constructor() {}

  ngOnInit() {}

  done() {
    const f = {
      ...this.moods[this.selected],
      note: this.note,
    };

    this.modalCtrl.dismiss({
      event: true,
      entry: f,
    });
  }

  selectMood(index) {
    this.selected = index;
    console.log(index);
  }
}

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [NewEntryComponent],
  exports: [NewEntryComponent],
})
export class NewEntryModule {}
