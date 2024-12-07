import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>import('./Components/layout/layout.component'),
        children: [
            {
                path: 'dashboard',
                loadComponent: () =>import('./Contenido/dashboard/dashboard.component')
            },
            {
                path: 'clientes',
                loadComponent: () =>import('./Contenido/clientes/clientes.component')
            },
            {
                path: 'platillos',
                loadComponent: () =>import('./Contenido/platillos/platillos.component')
            },
            {
                path: 'restaurantes',
                loadComponent: () =>import('./Contenido/restaurantes/restaurantes.component')
            },
            {
                path: 'editarcliente/:id',
                loadComponent: () =>import('./Contenido/editar-clientes/editar-clientes.component')
            },
            {
                path: 'agregarcliente',
                loadComponent: () =>import('./Contenido/agregar-clientes/agregar-clientes.component')
            },
            {
                path: 'editarplatillo/:id',
                loadComponent: () =>import('./Contenido/editar-platillos/editar-platillos.component')
            },
            {
                path: 'agregarplatillo',
                loadComponent: () =>import('./Contenido/agregar-platillos/agregar-platillos.component')
            },
            {
                path: 'vistarestaurante/:id',
                loadComponent: () =>import('./Contenido/vista-restaurante/vista-restaurante.component')
            },
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            }
    ]
    },
    {
        path: '**',
        redirectTo: 'dashboard',
    }
];
