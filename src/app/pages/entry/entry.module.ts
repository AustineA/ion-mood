import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MoodCardModule } from '../../components/moodcard.component';
import { IonicModule } from '@ionic/angular';

import { EntryPageRoutingModule } from './entry-routing.module';

import { EntryPage } from './entry.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntryPageRoutingModule,
    MoodCardModule,
  ],
  declarations: [EntryPage],
})
export class EntryPageModule {}
