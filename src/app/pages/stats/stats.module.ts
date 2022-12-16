import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StatsPageRoutingModule } from './stats-routing.module';

import { StatsPage } from './stats.page';
import { StreakModule } from 'src/app/components/streak.component';
import { MoodCountModule } from 'src/app/components/mood-count.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StreakModule,
    MoodCountModule,
    StatsPageRoutingModule,
  ],
  declarations: [StatsPage],
})
export class StatsPageModule {}
