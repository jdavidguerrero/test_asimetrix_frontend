import { appFetchLogin } from './fetch';
import host from './host';


export const loginUser = async (username, password) => {
   const url = `${host.backURL}/login`;
   return await appFetchLogin({ url, body: JSON.stringify({email: username, password: password}), method: 'POST' });
};