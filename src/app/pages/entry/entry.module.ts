import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MoodCardModule } from '../../components/moodcard.component';
import { FloadtingButtonModule } from '../../components/floating-button.component';

import { IonicModule } from '@ionic/angular';

import { EntryPageRoutingModule } from './entry-routing.module';

import { EntryPage } from './entry.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntryPageRoutingModule,
    FloadtingButtonModule,
    MoodCardModule,
  ],
  declarations: [EntryPage],
})
export class EntryPageModule {}
