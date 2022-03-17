import { configureStore } from '@reduxjs/toolkit';

import appReducer from 'state/app/appSlice';

export const store = configureStore({
  reducer: {
    app: appReducer,
  },
});
