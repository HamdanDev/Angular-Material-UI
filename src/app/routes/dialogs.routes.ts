import { Routes } from '@angular/router';

export const dialogsRoutes: Routes = [
  {
    path: 'dialogs',
    loadComponent: () => import('../components/dialogs/dialogs.component')
      .then(m => m.DialogsComponent)
  }
]; 