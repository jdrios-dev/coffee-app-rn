export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      console.log(state, action);
      return {
        ...state,
        size: state.size + 1,
        products: {
          ...state.products,
          [action.payload.product.id]: action.payload,
        },
      };
    case 'REMOVE_PRODUCT':
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const {[action.payload.product.id]: _, ...products} = state.products;
      return {
        ...state,
        size: state.size - 1,
        products,
      };
    default:
      return state;
  }
};
