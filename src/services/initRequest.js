import axios from 'axios';

// actions
import { setLoading } from 'state/app/appSlice';

const configs = {
  baseURL: process.env.REACT_APP_ENDPOINT_API,
  // timeout: 30000,
  showLoading: false,
};

export const instance = axios.create(configs);

export default function initRequest(store) {
  let requestCount = 0;

  function decreaseRequestCount() {
    requestCount -= 1;
    if (requestCount === 0) {
      store.dispatch(setLoading(false));
    }
  }
  //client request API
  instance.interceptors.request.use(
    (config) => {
      console.log('request success', config);
      // show/hide loading
      if (config.showLoading) {
        requestCount += 1;
        store.dispatch(setLoading(true));
        // show loading
      }

      // add auth token
      const accessToken = localStorage.getItem('accessToken');
      if (accessToken) {
        config.headers['x-auth-token'] = accessToken;
      }

      return config;
    },
    (error) => {
      console.log('request error', error);
      if (error.config.showLoading) {
        // hide loading
        decreaseRequestCount();
      }
      return Promise.reject(error);
    }
  );

  //BE response API
  instance.interceptors.response.use(
    (res) => {
      console.log('res success', res);

      if (res.config.showLoading) {
        // hide loading
        decreaseRequestCount();
      }
      return res;
    },
    async (error) => {
      console.log('res error', error.response);

      if (error && error.response.config.showLoading) {
        // hide loading
        decreaseRequestCount();
      }

      // handle request timeout
      if (error.code === 'ENCONNABORTED') {
        // hide loading
        decreaseRequestCount();

        // code something
      }

      // handle refresh token
      const statusCode = error.reponse.status;

      if (statusCode === 401 && error.config._retry) {
        error.config._retry = true;
        try {
          const refreshToken = localStorage.getItem('refreshToken');
          const result = await instance.post('/auth/refreshToken', {
            refreshToken,
          });
          window.localStorage.setItem('accessToken', result.data.accessToken);
          instance.defaults.headers['x-auth-token'] = result.data.accessToken;
          return instance(error.config);
        } catch (error) {
          if (error.response && error.response.data) {
            return Promise.reject(error.repsonse.data);
          }
          return Promise.reject(error);
        }
      }

      // handle errors
      switch (statusCode) {
        case 500: {
          // code something
          break;
        }
        case 403: {
          // code something
          break;
        }
        case 401: {
          // code something (401: unauthorized)
          break;
        }
        default:
          break;
      }
      return Promise.reject(error);
    }
  );
}
