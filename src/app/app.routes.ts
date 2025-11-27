import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/module-1/module-1').then((m) => m.Module1),
    title: 'Module1',
  },
];
