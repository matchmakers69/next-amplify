import { AnyAction, combineReducers } from '@reduxjs/toolkit';
import productsReducer, {
  initialState as productsState,
  ProductsState,
} from 'src/features/products/productsSlice';
import { HYDRATE } from 'next-redux-wrapper';

export type State = {
  products: ProductsState;
};

const init: State = {
  products: productsState,
};

const combineReducer = combineReducers({
  products: productsReducer,
});

export const reducer = (state: State = init, action: AnyAction): State => {
  // switch (action.type) {
  //   case HYDRATE:
  //     return action.payload;

  //   default: {
  //     const combineReducer = combineReducers({
  //       products: productsReducer,
  //     });
  //     return combineReducer(state, action);
  //   }
  // }
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    return nextState;
  }
  return combineReducer(state, action);
};
