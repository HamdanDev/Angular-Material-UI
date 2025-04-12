import { Routes } from '@angular/router';

export const layoutRoutes: Routes = [
  {
    path: 'layout',
    loadComponent: () => import('../components/layout/layout.component')
      .then(m => m.LayoutComponent)
  }
]; 