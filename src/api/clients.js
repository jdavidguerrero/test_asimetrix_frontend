import { appFetchClients, appCreateClient, appRemoveClients } from './fetch';
import host from './host';


export const getClients = async () => {
   const url = `${host.backURL}/getall`;
   return await appFetchClients({ url, method: 'GET' });
};