import React from 'react';
import { Redirect } from 'react-router';



const Logout = ()=> {
    
       
       localStorage.removeItem('company_id');
       localStorage.removeItem('authorization');
       localStorage.removeItem('authenticated');
       localStorage.removeItem('name');
       localStorage.removeItem('role');

   return(
           <Redirect to='/login'/>
)
    
}

export default Logout;