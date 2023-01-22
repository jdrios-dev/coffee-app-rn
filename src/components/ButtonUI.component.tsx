import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import React from 'react';
import colors from '../styles/colors';

type ButtonUIPros = {
  title: string;
  onPress: any;
};

const ButtonUIComponent = ({onPress, title}: ButtonUIPros) => {
  return (
    <TouchableOpacity style={[styles.buttonAddBag]} onPress={onPress}>
      <Text style={styles.buttonAddBagText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonAddBag: {
    backgroundColor: colors.secondary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    height: 40,
  },
  buttonAddBagText: {
    color: colors.white,
    fontWeight: '600',
    fontSize: 16,
  },
});

export default ButtonUIComponent;
