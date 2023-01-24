import React, {createContext} from 'react';

type CartAction = {
  type: 'ADD_PRODUCT' | 'REMOVE_PRODUCT';
  payload: any;
};

export type StateType = {size: number; products: any};

export type ContextType = {
  state: StateType;
  dispatch: React.Dispatch<CartAction>;
};

export const initialState = {
  size: 0,
  products: {},
};

export const CartContext = createContext<ContextType>({
  state: initialState,
  dispatch: () => {},
});
