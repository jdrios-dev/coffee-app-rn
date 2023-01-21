import {Category, Product, products} from './index';
const getProductosByCategory = (category: Category): Product[] => {
  const items = products.filter(item => item.category === category);
  return items;
};

const getProductById = (id: string): Product | string => {
  const product = products.find(item => item.id === id);
  if (!product) {
    return 'We are sorry, We dont have that product yet.';
  }
  return product;
};

export {getProductosByCategory, getProductById};
