import httpRequest from './httpRequest';

export const loginUser = async (bodyData) => {
  return await httpRequest.post('/api/user/login', bodyData, {
    showLoading: true,
  });
};
