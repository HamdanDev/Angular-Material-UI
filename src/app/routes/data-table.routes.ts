import { Routes } from '@angular/router';

export const dataTableRoutes: Routes = [
  {
    path: 'data-table',
    loadComponent: () => import('../components/data-table/data-table.component')
      .then(m => m.DataTableComponent)
  }
]; 