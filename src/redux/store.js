import { configureStore } from '@reduxjs/toolkit';

import playerReducer from './features/playerSlice';
import { shazmanCoreApi } from './services/shazmanCore';

export const store = configureStore({
  reducer: {
    [shazmanCoreApi.reducerPath]: shazmanCoreApi.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shazmanCoreApi.middleware),
});
