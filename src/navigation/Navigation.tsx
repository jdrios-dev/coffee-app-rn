import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import colors from '../styles/colors';
import CategoryScreen from '../screens/CategoryScreen';
import CartScreen from '../screens/CartScreen';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: colors.white,
        },
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="CartScreen" component={CartScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
      <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
    </Stack.Navigator>
  );
};

export default MyStack;
