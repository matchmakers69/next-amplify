import {
  Action,
  ThunkAction,
  configureStore,
  EnhancedStore,
  Store,
  ThunkDispatch,
} from '@reduxjs/toolkit';
import { createWrapper, MakeStore, Context } from 'next-redux-wrapper';
import { useDispatch } from 'react-redux';
import { State, reducer } from './rootReducer';

export const store: Store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
  devTools: process.env.NODE_ENV !== 'production',
});

const setupStore = (_: Context): EnhancedStore => store;

const makeStore: MakeStore<State | any> = (context: Context) => {
  return setupStore(context);
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ReturnType<typeof makeStore>['dispatch'];
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export type ThunkAppDispatch = ThunkDispatch<RootState, void, Action>;
export const useAppThunkDispatch = () => useDispatch<ThunkAppDispatch>();

export const wrapper = createWrapper<RootState>(makeStore, {
  debug: process.env.NODE_ENV !== 'production',
});

export default wrapper;
