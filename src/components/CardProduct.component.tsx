import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import colors from '../styles/colors';
import {useNavigation} from '@react-navigation/native';

type CardProductProps = {
  name: string;
  price: number;
  image: string;
  id: string;
};

const CardProductComponent = ({name, price, image, id}: CardProductProps) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('DetailScreen', {id: id})}>
      <Image
        source={require('../assets/images/coffee-1.png')}
        style={styles.image}
      />
      <Text style={styles.cardName}>{name}</Text>
      <View style={styles.cardPriceChip}>
        <Text style={styles.cardPrice}>$ {price}</Text>
      </View>
    </TouchableOpacity>
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
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

export default CardProductComponent;
