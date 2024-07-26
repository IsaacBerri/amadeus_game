import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'form',
        loadComponent: () => import('./pages/form/form.component')
    },
    {
        path: 'about',
        loadComponent: () => import('./pages/about/about.component')
    },
    {
        path: 'explore',
        loadComponent: () => import('./pages/explore/explore.component')
    }
];
