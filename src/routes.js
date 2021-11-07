import React from 'react';
import $ from 'jquery';

window.jQuery = $;
window.$ = $;
global.jQuery = $;

const Dashboard = React.lazy(() => import('./Pages/Dashboard/Dashboard'));
const crear_conductores = React.lazy(() => import('./Pages/Conductores/crear_conductores'));
const listar_conductores = React.lazy(() => import('./Pages/Conductores/listar_conductores'));
const crear_clientes = React.lazy(() => import('./Pages/Clientes/crear_clientes'));
const listar_clientes = React.lazy(() => import('./Pages/Clientes/listar_clientes'));
const listar_usuarios = React.lazy(() => import('./Pages/Usuarios/listar_usuarios'));
const listar_viajes = React.lazy(() => import('./Pages/Viajes/listar_viajes'));
const asignar_viajes = React.lazy(() => import('./Pages/Viajes/asignar_viajes'));
const crear_viajes = React.lazy(() => import('./Pages/Viajes/crear_viajes'));

const routes = [
    { path: '/dashboard', exact: true, name: 'Dashboard', component: Dashboard },
    { path: '/conductores/ingreso', exact: true, name: 'Ingreso', component: crear_conductores },
    { path: '/conductores/listado', exact: true, name: 'Listado', component: listar_conductores },
    { path: '/clientes/ingreso', exact: true, name: 'Ingreso', component: crear_clientes },
    { path: '/clientes/listado', exact: true, name: 'Listado', component: listar_clientes },
    { path: '/usuarios', exact: true, name: 'Usuarios', component: listar_usuarios },
    { path: '/viajes/listado', exact: true, name: 'Listado', component: listar_viajes },
    { path: '/viajes/asignar', exact: true, name: 'Listado', component: asignar_viajes },
    { path: '/crear_viajes', exact: true, name: 'Crear Viaje', component: crear_viajes },
  /*  { path: '/dashboard', exact: true, name: 'Dashboard', component: Dashboard },
    { path: '/dashboard', exact: true, name: 'Dashboard', component: Dashboard },
    { path: '/dashboard', exact: true, name: 'Dashboard', component: Dashboard }, */
 
];

export default routes;