// - Routes instead of RouteConfig
// - RouterModule instead of provideRoutes
import { provideRouter, RouterConfig } from '@angular/router';

import { ProductList } from './productList';
import { Home } from './home';

const routes: RouterConfig = [
  {
    path: 'products',
    component: ProductList,
  },
  {
    path: '',
    redirectTo: '/home'
  },
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
