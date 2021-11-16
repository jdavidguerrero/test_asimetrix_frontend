import { appFetchClients, appFetchCreateClient, appFetchRemoveClient } from './fetch';
import host from './host';


export const getClients = async () => {
   const url = `${host.backURL}/getall`;
   return await appFetchClients({ url, method: 'GET' });
};


export const createClient = async (name, email, password) => {
   const url = `${host.backURL}/create_client`;
   return await appFetchCreateClient({ url,body: JSON.stringify({name: name, email: email, password: password}) ,method: 'POST' });
};

export const removeClient = async (id) => {
   const url = `${host.backURL}/remove_client/`+id
   return await appFetchRemoveClient({ url,method: 'GET' });
};