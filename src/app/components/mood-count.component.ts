import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import Chart from 'chart.js/auto';

@Component({
  selector: 'mood-count-component',
  template: `
    <div class="card mood-count ion-padding">
      <div>
        <div>
          <div class="longest-streak">
            <h3>Mood Count</h3>
            <div class="chart">
              <canvas id="reportChart">{{ chart }}</canvas>
            </div>
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
  chart: any;
  moods = [
    {
      emoji: '😆',
      count: 5,
      color: '#CCFFED',
      mood: 'Awesome Days',
    },
    {
      emoji: '😊',
      count: 3,
      color: '#E3FEB8',
      mood: 'Good Days',
    },
    {
      emoji: '😐',
      count: 6,
      color: '#D8E5EF',
      mood: 'Meh Days',
    },
    {
      emoji: '😢',
      count: 2,
      color: '#F5DFC9',
      mood: 'Bad Days',
    },
    {
      emoji: '😣',
      count: 1,
      color: '#F4C2C4',
      mood: 'Awful Days',
    },
  ];
  constructor() {}

  ngOnInit() {
    this.createChart();
  }

  colors() {
    return this.moods.map((mood) => mood.color);
  }

  data() {
    return this.moods.map((mood) => mood.count);
  }

  labels() {
    return this.moods.map((mood) => mood.mood);
  }

  createChart() {
    this.chart = new Chart('reportChart', {
      type: 'doughnut',

      data: {
        labels: this.labels(),
        datasets: [
          {
            data: this.data(),
            backgroundColor: this.colors(),
            hoverOffset: 10,
            borderWidth: 0,
            borderRadius: [
              {
                outerStart: 24,
                innerStart: 24,
              },
              0,
              0,
              0,
              {
                outerEnd: 24,
                innerEnd: 24,
              },
            ],
          },
        ],
      },
      options: {
        circumference: 180,
        rotation: -90,
        aspectRatio: 2,
        cutout: '70%',
        layout: {
          padding: 20,
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              label: function (ctx) {
                // console.log(ctx);
                return `${ctx.label}`;
              },
            },
          },
        },
      },
    });
  }
}

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [MoodCountComponent],
  exports: [MoodCountComponent],
})
export class MoodCountModule {}
