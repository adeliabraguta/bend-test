import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'module1', pathMatch: 'full' },
  {
    path: 'module1',
    loadComponent: () =>
      import('./pages/module-1/module-1.component').then((m) => m.Module1Component),
    title: 'Module1',
  },
];
