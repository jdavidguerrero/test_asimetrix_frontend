import React from 'react';

const SignIn = React.lazy(() => import('./Pages/Authentication/SignIn/SignIn'));
const Recover = React.lazy(() => import('./Pages/Authentication/Recover_pass/ResetPassword'));

const route = [
    { path: '/auth/signin-1', exact: true, name: 'Signin', component: SignIn },
    { path: '/auth/recovery', exact: true, name: 'Recover', component: Recover }
];

export default route;