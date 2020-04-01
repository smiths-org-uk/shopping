import Actions from './Actions';

const API_SERVER = process.env.API_SERVER || '';

const httpCall = (method, url, body) => {
  const request = {};
  request.method = method.toUpperCase();

  request.headers = new Headers();
  request.headers.append('Content-Type', 'application/json');

  if (!(request.method === 'GET' || request.method === 'HEAD')) {
    // To work with the Fetch API, the body needs to be stringified first.
    request.body = JSON.stringify(body);
  }

  return fetch(url, request)
      .catch((error) => {
        console.log(
            `Error occurred in completing ${request.method} request to: ${url}
            \n${error}`
        );
      })
      .then((response) => {
        if (response.ok) {
          return response;
        } else {
          throw response;
        }
      });
};

export default class Middleware {
  static fetchItems() {
    return (dispatch) => {
      return httpCall('GET', `${API_SERVER}/items`)
          .then((response) => response.json().then((data) => {
            dispatch(Actions.setItems(data));
          }));
    };
  }

  static saveItems(items) {
    return (dispatch) => {
      return httpCall('PUT', `${API_SERVER}/save`, items)
          .then((response) => {
            dispatch(Middleware.fetchItems());
          });
    };
  }

  static resetItems() {
    return (dispatch) => {
      return httpCall('PUT', `${API_SERVER}/reset`)
          .then((response) => {
            dispatch(Middleware.fetchItems());
          });
    };
  }
}
