import { configureStore } from '@reduxjs/toolkit';
import { pokemonApi } from './api/pokemon';

export const store = configureStore({
  reducer: {
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },

});
export type RootState = ReturnType<typeof store.getState>

export type AddDispatch = typeof store.dispatch

export default store;
