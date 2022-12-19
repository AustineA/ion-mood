import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'new-entry-component',
  template: ` <ion-content class="ion-padding">it works!</ion-content> `,
  styles: [``],
})
export class NewEntryComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [NewEntryComponent],
  exports: [NewEntryComponent],
})
export class NewEntryModule {}
