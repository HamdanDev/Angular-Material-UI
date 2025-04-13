import { Routes } from '@angular/router';
import { formControlsRoutes } from './routes/form-controls.routes';
import { navigationRoutes } from './routes/navigation.routes';
import { layoutRoutes } from './routes/layout.routes';
import { dataTableRoutes } from './routes/data-table.routes';
import { dialogsRoutes } from './routes/dialogs.routes';


export const routes: Routes = [
  { path: '', redirectTo: '/form-controls', pathMatch: 'full' },
  ...formControlsRoutes,
  ...navigationRoutes,
  ...layoutRoutes,
  ...dataTableRoutes,
  ...dialogsRoutes
];