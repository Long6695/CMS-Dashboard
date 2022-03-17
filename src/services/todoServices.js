import httpRequest from './httpRequest';

export const fetchTodo = async () => {
  return await httpRequest.get('https://jsonplaceholder.typicode.com/todos', {
    showLoading: true,
  });
};
