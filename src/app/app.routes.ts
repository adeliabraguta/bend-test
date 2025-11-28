import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'module1', pathMatch: 'full' },
  {
    path: 'module1',
    loadComponent: () =>
      import('./pages/module-one/module-one.component').then((m) => m.ModuleOneComponent),
    title: 'Module1',
  },
  {
    path: 'module2',
    loadComponent: () =>
      import('./pages/module-2/module-two.component').then((m) => m.ModuleTwoComponent),
    title: 'Module2',
  },
];
