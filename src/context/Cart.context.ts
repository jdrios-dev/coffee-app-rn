import React, {createContext} from 'react';
import {Product, Sizes, Topping} from '../data';

type CartAction = {
  type:
    | 'ADD_ORDER_ITEM'
    | 'REMOVE_ORDER_ITEM'
    | 'UPDATE_ORDER_ITEM'
    | 'ADD_UNIT'
    | 'REMOVE_UNIT';
  payload: any;
};

export type StateType = {size: number; orders: {[key: string]: Order}};

export type ContextType = {
  state: StateType;
  dispatch: React.Dispatch<CartAction>;
};

export type Order = {
  id: string;
  product: Product;
  size: Sizes | null;
  toppings: Topping[];
  quantity: number;
  note: string;
  price: number;
};

export const initialState = {
  size: 0,
  orders: {},
};

export const CartContext = createContext<ContextType>({
  state: initialState,
  dispatch: () => {},
});
