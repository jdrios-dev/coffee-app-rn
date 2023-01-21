import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import colors from '../styles/colors';

type CardProductProps = {
  name: string;
  price: number;
};

const CardProductComponent = ({name, price}: CardProductProps) => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardName}>{name}</Text>
      <View style={styles.cardPriceChip}>
        <Text style={styles.cardPrice}>$ {price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.textClear,
    width: '48%',
    height: 190,
    borderRadius: 10,
    marginBottom: 6,
    marginHorizontal: 3,
    padding: 10,
    position: 'relative',
  },
  cardName: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    color: colors.white,
    fontSize: 18,
    fontWeight: '600',
  },
  cardPrice: {fontSize: 14},
  cardPriceChip: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: colors.white,
    borderRadius: 20,
    height: 'auto',
    width: 'auto',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});

export default CardProductComponent;
