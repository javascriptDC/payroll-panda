import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from './layout/components/layout/layout.component';
import { PlayersComponent } from './players/components/players/players.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      {
        path: '',
        component: PlayersComponent,
        pathMatch: 'full'
      },
    ],
  },
  {
    path: '**', redirectTo: '',
  }
];

export const routesForRoot: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: false, enableTracing: false });
export const routesForChild: ModuleWithProviders = RouterModule.forChild(routes);
