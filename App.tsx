import 'react-native-gesture-handler';
import React, {useReducer} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MyStack from './src/navigation/Navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {CartContext, initialState, CartReducer} from './src/context/';

const App = () => {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <CartContext.Provider value={{state, dispatch}}>
          <MyStack />
        </CartContext.Provider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
