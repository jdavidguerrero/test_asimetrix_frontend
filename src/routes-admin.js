import React from 'react';
import $ from 'jquery';

window.jQuery = $;
window.$ = $;
global.jQuery = $;


const crear_clientes = React.lazy(() => import('./Pages/Clientes/crear_clientes'));
const listar_clientes = React.lazy(() => import('./Pages/Clientes/listar_clientes'));
const Logout = React.lazy(() => import('./Pages/Dashboard/logout'));

const routes = [
    
    { path: '/clientes/ingreso', exact: true, name: 'Ingreso', component: crear_clientes },
    { path: '/clientes/listado', exact: true, name: 'Listado', component: listar_clientes },
    { path: '/logout', exact: true, name: 'Logout', component: Logout }
 
];

export default routes;