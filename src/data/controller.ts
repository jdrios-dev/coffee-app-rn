import {Category, Product, products} from './index';
const getProductosByCategory = (category: Category): Product[] => {
  const items = products.filter(item => item.category === category);
  return items;
};

const getProductById = (id: string): Product => {
  const product = products.find(item => item.id === id);
  if (product) {
    return product;
  }
  return products[0];
};

export {getProductosByCategory, getProductById};
