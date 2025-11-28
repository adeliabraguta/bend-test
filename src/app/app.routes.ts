import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'module1', pathMatch: 'full' },
  {
    path: 'module1',
    loadComponent: () =>
      import('./pages/module-1/module-1.component').then((m) => m.Module1Component),
    title: 'Module1',
  },
  {
    path: 'module2',
    loadComponent: () =>
      import('./pages/module-2/module-2.component').then((m) => m.Module2Component),
    title: 'Module2',
  },
];
