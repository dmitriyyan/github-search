import { configureStore } from '@reduxjs/toolkit';

import { githubReducer } from './github/github.slice';
import { githubApi } from './github/github.api';

export const store = configureStore({
  reducer: { [githubApi.reducerPath]: githubApi.reducer, github: githubReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(githubApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
