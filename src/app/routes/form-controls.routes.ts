import { Routes } from '@angular/router';

export const formControlsRoutes: Routes = [
  {
    path: 'form-controls',
    loadComponent: () => import('../components/form-controls/form-controls.component')
      .then(m => m.FormControlsComponent)
  }
]; 