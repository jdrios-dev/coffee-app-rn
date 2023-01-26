import {ImageSourcePropType} from 'react-native';

export type Category = 'food' | 'drink';
export type Topping = {
  id: string;
  name: string;
  price: number;
};

export type Sizes = 'basic' | 'middle' | 'large';
export type Product = {
  id: string;
  category: Category;
  longName: string;
  name: string;
  icon: string;
  image: ImageSourcePropType;
  description: string;
  price: number;
  sizes: Sizes[];
  stock: number;
  isFavorite: boolean;
};

const categories: Category[] = ['food', 'drink'];
export const toppings: Topping[] = [
  {price: 1, name: 'boba', id: 'boba'},
  {price: 1, name: 'almond', id: 'almond'},
  {price: 1, name: 'cheese', id: 'cheese'},
  {price: 1, name: 'ice', id: 'ice'},
  {price: 1, name: 'chips', id: 'chips'},
  {price: 1, name: 'peper', id: 'peper'},
  {price: 1, name: 'fruits', id: 'fruits'},
];

const products: Product[] = [
  {
    id: 'ABC-123',
    category: 'food',
    longName: 'The Classic Chocolate Cake',
    name: 'Chocolate Cake',
    icon: 'salad.svg',
    image: require('../assets/images/food-1.png'),
    description:
      'A moist and fluffy chocolate cake, layered with rich chocolate ganache and finished with a smooth chocolate frosting. Perfect for chocolate lovers.',
    price: 10.05,
    sizes: ['middle'],
    stock: 10,
    isFavorite: true,
  },
  {
    id: 'ABC-124',
    category: 'food',
    longName: 'The Red Velvet Cake',
    name: 'Velvet Cake',
    icon: 'salad.svg',
    image: require('../assets/images/food-2.png'),
    description:
      'A classic southern treat, this red velvet cake is moist and fluffy, with a delicate cream cheese frosting. Perfect for special occasions.',
    price: 11.25,
    sizes: ['middle', 'large'],
    stock: 7,
    isFavorite: true,
  },
  {
    id: 'ABC-125',
    category: 'food',
    longName: 'The Lemon Cake',
    name: 'Lemon Cake',
    icon: 'salad.svg',
    image: require('../assets/images/food-3.png'),
    description:
      'A tangy and refreshing lemon cake, with a light lemon curd filling and a zesty lemon buttercream frosting. Perfect for a summer gathering.',
    price: 5.49,
    sizes: ['middle', 'large'],
    stock: 15,
    isFavorite: true,
  },
  {
    id: 'ABC-126',
    category: 'food',
    longName: 'The Carrot Cake',
    name: 'Carrot Cake',
    icon: 'salad.svg',
    image: require('../assets/images/food-4.png'),
    description:
      'A moist and flavorful carrot cake, made with fresh grated carrots and a blend of spices, topped with a rich cream cheese frosting. Perfect for a comforting treat.',
    price: 7.07,
    sizes: ['basic', 'middle', 'large'],
    stock: 5,
    isFavorite: false,
  },

  //drinks
  {
    id: 'ABD-123',
    category: 'drink',
    longName: 'The Classic Latte',
    name: 'Latte',
    icon: 'salad.svg',
    image: require('../assets/images/coffee-1.png'),
    description:
      'A smooth and creamy blend of espresso and steamed milk, topped with a delicate layer of foam. Perfect for those who prefer a traditional coffee experience..',
    price: 12.95,
    sizes: ['middle'],
    stock: 10,
    isFavorite: false,
  },
  {
    id: 'ABD-124',
    category: 'drink',
    longName: 'The Mocha',
    name: 'Mocha',
    icon: 'salad.svg',
    image: require('../assets/images/coffee-2.png'),
    description:
      "A rich and decadent combination of espresso, chocolate syrup, and steamed milk, topped with whipped cream and a sprinkle of cocoa powder. A chocolate lover's dream come true.",
    price: 8.15,
    sizes: ['middle', 'large'],
    stock: 7,
    isFavorite: false,
  },
  {
    id: 'ABD-125',
    category: 'drink',
    longName: 'The Caramel Macchiato',
    name: 'Macchiato',
    icon: 'salad.svg',
    image: require('../assets/images/coffee-3.png'),
    description:
      'A delicious twist on the classic latte, featuring a shot of espresso poured over steamed milk and a drizzle of caramel syrup. A sweet and satisfying treat.',
    price: 10.5,
    sizes: ['middle', 'large'],
    stock: 15,
    isFavorite: true,
  },
  {
    id: 'ABD-126',
    category: 'drink',
    longName: 'The Cold Brew',
    name: 'Brew',
    icon: 'salad.svg',
    image: require('../assets/images/coffee-4.png'),
    description:
      'A refreshing and energizing coffee made by steeping coarsely ground beans in cold water for an extended period of time. Perfect for a hot summer day.',
    price: 4.0,
    sizes: ['basic', 'middle', 'large'],
    stock: 5,
    isFavorite: true,
  },
];

export {products, categories};
