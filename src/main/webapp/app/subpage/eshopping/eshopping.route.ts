import { Route } from '@angular/router';
import { EshoppingComponent } from './eshopping.component';

export const eshoppingRoute: Route = {
  path: '',
  component: EshoppingComponent,
  data: {
    pageTitle: 'logs.title',
  },
};
