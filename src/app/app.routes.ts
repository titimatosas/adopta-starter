import { Routes } from '@angular/router';
import { authGuard } from './services/auth.service';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.page').then((m) => m.LoginPage),
  },
  {
    path: 'registro',
    loadComponent: () =>
      import('./pages/registro/registro.page').then((m) => m.RegistroPage),
  },
  {
    path: '',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/galeria/galeria.page').then((m) => m.GaleriaPage),
  },
  {
    path: 'detalle/:id',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/detalle/detalle.page').then((m) => m.DetallePage),
  },
  {
    path: 'nuevo',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/nuevo/nuevo.page').then((m) => m.NuevoPage),
  },
  { path: '**', redirectTo: 'login' },
];
