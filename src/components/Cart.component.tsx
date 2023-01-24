import React, {useContext} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {CartContext} from '../context';
import colors from '../styles/colors';

const CartComponent = () => {
  const [state, _] = useContext(CartContext);
  console.log(require('../assets/IconArrow.png'));
  return state.size > 0 ? (
    <TouchableOpacity style={styles.container}>
      <Image style={styles.img} source={require('../assets/BasketIcon.png')} />
      <View style={styles.labelBackground}>
        <Text style={styles.label}>{state.size}</Text>
      </View>
    </TouchableOpacity>
  ) : (
    <></>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: 60,
    height: 60,
    backgroundColor: colors.secondary,
    borderRadius: 100,
    justifyContent: 'center',
    right: 0,
    bottom: 0,
    zIndex: 100,
  },
  img: {
    alignSelf: 'center',
    width: 40,
    height: 45,
  },
  labelBackground: {
    position: 'absolute',
    top: -3,
    right: -3,
    backgroundColor: colors.primary,
    paddingHorizontal: 7,
    paddingVertical: 2,
    borderRadius: 100,
    borderColor: colors.white,
  },
  label: {
    color: colors.white,
  },
});

export default CartComponent;
