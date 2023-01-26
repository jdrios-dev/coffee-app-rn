import {StateType} from './Cart.context';

export const CartReducer = (state: StateType, action: any) => {
  switch (action.type) {
    case 'ADD_ORDER_ITEM':
      return {
        ...state,
        size: state.size + action.payload.quantity,
        orders: {...state.orders, [action.payload.id]: action.payload},
      };

    case 'UPDATE_ORDER_ITEM':
      return {
        ...state,
        orders: {
          ...state.orders,
          [action.payload.id]: action.payload,
        },
      };
    case 'ADD_UNIT':
      return {
        ...state,
        size: state.size + 1,
        orders: {
          ...state.orders,
          [action.payload.id]: {
            ...state.orders[action.payload.id],
            quantity: state.orders[action.payload.id].quantity + 1,
          },
        },
      };
    case 'REMOVE_UNIT':
      return {
        ...state,
        size: state.size - 1,
        orders: {
          ...state.orders,
          [action.payload.id]: {
            ...state.orders[action.payload.id],
            quantity: state.orders[action.payload.id].quantity - 1,
          },
        },
      };
    case 'REMOVE_ORDER_ITEM':
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const {[action.payload.id]: _, ...orders} = state.orders;
      return {
        ...state,
        size: state.size - 1,
        orders,
      };
    default:
      return state;
  }
};
