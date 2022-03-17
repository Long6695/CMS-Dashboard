import React from 'react';
//services
import { fetchTodo } from 'services/todoServices';

//helpers
import { canAction } from 'helpers';
const Playground = () => {
  const handleFetch = async () => {
    try {
      const res = await fetchTodo();
      console.log(res);
    } catch (error) {
      console.log('error'.error);
    }
  };

  return (
    <div>
      <button type="button" onClick={handleFetch}>
        Fetch
      </button>
      {canAction('view', 'btnDelete') && (
        <button type="button" onClick={handleFetch}>
          Delete
        </button>
      )}
    </div>
  );
};

export default Playground;
