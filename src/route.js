import React from 'react';


const Login = React.lazy(() => import('./Pages/Authentication/SignIn/SignIn'));
const Recover = React.lazy(() => import('./Pages/Authentication/Recover_pass/ResetPassword'));

const route = [
    { path: '/login', exact: true, name: 'Login', component: Login },
    

    
];

export default route;