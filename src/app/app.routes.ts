import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'challanges',
    loadComponent: () => import('./challenges/challenges'),
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home'),
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
