import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'entry',
        loadChildren: () =>
          import('../pages/entry/entry.module').then((m) => m.EntryPageModule),
      },
      {
        path: 'stats',
        loadChildren: () =>
          import('../pages/stats/stats.module').then((m) => m.StatsPageModule),
      },
      {
        path: 'report',
        loadChildren: () =>
          import('../pages/report/report.module').then(
            (m) => m.ReportPageModule
          ),
      },
      {
        path: 'setting',
        loadChildren: () =>
          import('../pages/setting/setting.module').then(
            (m) => m.SettingPageModule
          ),
      },
      {
        path: '',
        redirectTo: '/tabs/entry',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/entry',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
