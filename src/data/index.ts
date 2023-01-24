export type Category = 'food' | 'drink';
export type Toppings =
  | 'boba'
  | 'almond'
  | 'cheese'
  | 'ice'
  | 'chips'
  | 'peper'
  | 'fruits';
export type Sizes = 'basic' | 'middle' | 'large';
export type Product = {
  id: string;
  category: Category;
  name: string;
  icon: string;
  image: string;
  description: string;
  price: number;
  sizes: Sizes[];
  stock: number;
};

const categories: Category[] = ['food', 'drink'];
export const toppings: Toppings[] = [
  'boba',
  'almond',
  'cheese',
  'ice',
  'chips',
  'peper',
  'fruits',
];

const products: Product[] = [
  {
    id: 'ABC-123',
    category: 'food',
    name: 'Salad',
    icon: 'salad.svg',
    image: 'salad-bg.png',
    description:
      'lorem iNostrud eiusmod velit ut veniam ipsum veniam adipisicing culpa non ut consectetur.',
    price: 10.05,
    sizes: ['middle'],
    stock: 10,
  },
  {
    id: 'ABC-124',
    category: 'food',
    name: 'Signature',
    icon: 'salad.svg',
    image: 'salad-bg.png',
    description:
      'lorem iNostrud eiusmod velit ut veniam ipsum veniam adipisicing culpa non ut consectetur.',
    price: 11.25,
    sizes: ['middle', 'large'],
    stock: 7,
  },
  {
    id: 'ABC-125',
    category: 'food',
    name: 'Bakery',
    icon: 'salad.svg',
    image: 'salad-bg.png',
    description:
      'lorem iNostrud eiusmod velit ut veniam ipsum veniam adipisicing culpa non ut consectetur.',
    price: 5.49,
    sizes: ['middle', 'large'],
    stock: 15,
  },
  {
    id: 'ABC-126',
    category: 'food',
    name: 'Yogurth',
    icon: 'salad.svg',
    image: 'salad-bg.png',
    description:
      'lorem iNostrud eiusmod velit ut veniam ipsum veniam adipisicing culpa non ut consectetur.',
    price: 7.07,
    sizes: ['basic', 'middle', 'large'],
    stock: 5,
  },

  //drinks
  {
    id: 'ABD-123',
    category: 'drink',
    name: 'Signature',
    icon: 'salad.svg',
    image: 'salad-bg.png',
    description:
      'lorem iNostrud eiusmod velit ut veniam ipsum veniam adipisicing culpa non ut consectetur.',
    price: 12.95,
    sizes: ['middle'],
    stock: 10,
  },
  {
    id: 'ABD-124',
    category: 'drink',
    name: 'Iced Coffee',
    icon: 'salad.svg',
    image: 'salad-bg.png',
    description:
      'lorem iNostrud eiusmod velit ut veniam ipsum veniam adipisicing culpa non ut consectetur.',
    price: 8.15,
    sizes: ['middle', 'large'],
    stock: 7,
  },
  {
    id: 'ABD-125',
    category: 'drink',
    name: 'Hot Coffee',
    icon: 'salad.svg',
    image: 'salad-bg.png',
    description:
      'lorem iNostrud eiusmod velit ut veniam ipsum veniam adipisicing culpa non ut consectetur.',
    price: 10.5,
    sizes: ['middle', 'large'],
    stock: 15,
  },
  {
    id: 'ABD-126',
    category: 'drink',
    name: 'Chocolate',
    icon: 'salad.svg',
    image: 'salad-bg.png',
    description:
      'lorem iNostrud eiusmod velit ut veniam ipsum veniam adipisicing culpa non ut consectetur.',
    price: 4.0,
    sizes: ['basic', 'middle', 'large'],
    stock: 5,
  },
];

export {products, categories};
