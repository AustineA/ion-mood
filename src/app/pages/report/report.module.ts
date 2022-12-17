import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportPageRoutingModule } from './report-routing.module';
import { CalendarModule } from '../../components/calendar.component';

import { ReportPage } from './report.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendarModule,
    ReportPageRoutingModule,
  ],
  declarations: [ReportPage],
})
export class ReportPageModule {}
