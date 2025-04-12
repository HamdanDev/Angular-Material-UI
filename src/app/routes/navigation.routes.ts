import { Routes } from '@angular/router';

export const navigationRoutes: Routes = [
  {
    path: 'navigation',
    loadComponent: () => import('../components/navigation/navigation.component')
      .then(m => m.NavigationComponent)
  }
]; 