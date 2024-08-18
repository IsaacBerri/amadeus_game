import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'travels',
        loadComponent: () => import('@pages/travel/travel.component')
    },
    {
        path: 'about',
        loadComponent: () => import('@pages/about/about.component')
    },
    {
        path: 'explore',
        loadComponent: () => import('@pages/explore/explore.component')
    },
    {
        path: 'travels/destinations',
        loadComponent: () => import('@pages/destinations/destinations.component')
    },
    {
        path: '',
        redirectTo: 'travels',
        pathMatch: 'full'
    }
];
