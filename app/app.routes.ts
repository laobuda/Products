
//import { provideRouter, RouterConfig } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { ProductList } from './productList';
import { Home } from './home';

//onst routes: RouterConfig = [
const routes: Routes = [
  {
    path: '/products',
    component: ProductList,
  },
  {
    path: '',
    redirectTo: '/home'
  },
];

export const APP_ROUTER_PROVIDERS = [
  RouterModule(routes)
];
