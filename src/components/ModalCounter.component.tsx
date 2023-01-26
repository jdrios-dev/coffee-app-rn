import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {ReactElement} from 'react';
import colors from '../styles/colors';
import ButtonUIComponent from './ButtonUI.component';
import {Order} from '../context';

type CircularButtonProps = {
  children: ReactElement;
  onPress: () => void;
};

export const CircularButton = ({children, onPress}: CircularButtonProps) => (
  <TouchableOpacity onPress={onPress} style={styles.btnCircle}>
    {children}
  </TouchableOpacity>
);

type ModalCounterComponentProps = {
  addToCart: () => void;
  order: Order;
  handleOrderChange: (fieldToUpdate: any) => void;
};

const ModalCounterComponent = ({
  addToCart,
  order,
  handleOrderChange,
}: ModalCounterComponentProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.btnContainer}>
        <CircularButton
          onPress={() => handleOrderChange({quantity: order.quantity - 1})}>
          <Text style={[styles.btnText, styles.btnTextBigger]}>-</Text>
        </CircularButton>
        <Text style={[styles.btnText, styles.btnTextSpace]}>
          {order.quantity.toFixed(2)}
        </Text>
        <CircularButton
          onPress={() => handleOrderChange({quantity: order.quantity + 1})}>
          <Text style={[styles.btnText, styles.btnTextBigger]}>+</Text>
        </CircularButton>
      </View>
      <ButtonUIComponent
        title={`Add to bag: ${order.price * order.quantity}`}
        onPress={() => {
          addToCart();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    width: '100%',
    height: 90,
    borderTopStartRadius: 24,
    borderTopEndRadius: 24,
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  btnCircle: {
    width: 35,
    height: 35,
    borderColor: colors.white,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    paddingBottom: 2,
  },
  btnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  btnText: {
    color: colors.white,
  },
  btnTextSpace: {
    marginHorizontal: 10,
  },
  btnTextBigger: {
    fontSize: 24,
    fontWeight: '600',
  },
});

export default ModalCounterComponent;
