import Logout from './../Pages/Dashboard/logout'



export const parseResponse = (mode) => async (response) => {
  if (response.status === 204 || response.status === 401) {
     Logout();

    // await logoutUser()
    window.location.href = '/'
    return response
  }
  if (response.status >= 200 && response.status <= 500) {
    return mode === 'blob' ? response.blob() : response.json();
  }
  const error = new Error(response.statusText);
  throw error;
};



export const parseResponseCos = (mode) => (response) => {
  return mode === 'blob' ? response.blob() : response.json();
};



export const appFetchLogin = (options) =>
  fetch(options.url, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: options.body,
    method: options.method
  })
    .then(parseResponse('json'))
    .then((response) => ({ response }))
    .catch((error) => {
      return error;
    });

export const appFetch = (options) =>
  fetch(options.url, {
    headers: {
      'Authorization': `${options.auth}`,
      'Content-Type': 'application/json'
    },
    body: options.body,
    method: options.method
  })
    .then(parseResponse('json'))
    .then((response) => ({ response }))
    .catch((error) => {
      return error;
    });

  export const appFetchClients = (options) =>
    fetch(options.url, {
      headers: {
        'Authorization': 'Bearer' + ' '+ localStorage.getItem('authorization'),
        'Content-Type': 'application/json'
      },
      method: options.method
    })
      .then(parseResponse('json'))
      .then((response) => ({ response }))
      .catch((error) => {
        return error;
      });


    