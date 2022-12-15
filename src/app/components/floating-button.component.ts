import { CommonModule } from '@angular/common';
import { Component, Input, NgModule, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'fbc',
  template: `
    <div class="floating-button">
      <ion-button color="dark" mode="ios" expand="block">
        <ion-icon name="add-outline"></ion-icon>
        {{ title }}
      </ion-button>
    </div>
  `,
  styles: [
    `
      .floating-button {
        position: fixed;
        bottom: 1rem;
        right: 1rem;
        z-index: 10000;
      }

      ion-button {
        --border-radius: 1.25rem;
      }
    `,
  ],
})
export class FloatingButtonComponent implements OnInit {
  @Input() title: string = '';
  constructor() {}

  ngOnInit() {}
}

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [FloatingButtonComponent],
  exports: [FloatingButtonComponent],
})
export class FloadtingButtonModule {}
