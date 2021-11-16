import { appFetchDataInit, appFetchDataPieTemp, appFetchDataPieHum,appFetchDataLine } from './fetch';
import host from './host';


export const getDataInit = async (id) => {
   const url = `${host.backURL}/getInitData/`+id;
   return await appFetchDataInit({ url, method: 'GET' });
};


export const getDataPieTemp = async (id) => {
   const url = `${host.backURL}/getDataPieTemp/`+id;
   return await appFetchDataPieTemp({ url, method: 'GET' });
};

export const getDataPieHum = async (id) => {
   const url = `${host.backURL}/getDataPieHum/`+id;
   return await appFetchDataPieHum({ url, method: 'GET' });
};

export const getDataLine = async (id) => {
   const url = `${host.backURL}/getDataLine/`+id;
   return await appFetchDataLine({ url, method: 'GET' });
};



/*

export const createClient = async (name, email, password) => {
   const url = `${host.backURL}/create_client`;
   return await appFetchCreateClient({ url,body: JSON.stringify({name: name, email: email, password: password}) ,method: 'POST' });
};

export const removeClient = async (id) => {
   const url = `${host.backURL}/remove_client/`+id
   return await appFetchRemoveClient({ url,method: 'GET' });
};
*/