import React from 'react';
import {TouchableOpacity, Text, Image, StyleSheet} from 'react-native';
import {Product} from '../data';
import colors from '../styles/colors';
import {useNavigation} from '@react-navigation/native';

type CategoryPillProps = {
  product: Product;
};

function CategoryPillComponent({product}: CategoryPillProps) {
  const navigation = useNavigation();
  const {name} = product;
  return (
    <TouchableOpacity
      style={styles.pillContainer}
      onPress={() => navigation.navigate('DetailScreen', {id: product.id})}>
      <Image
        style={styles.img}
        source={{uri: 'https://icons8.com/icon/K-6n6MuHwv13/coffee-to-go'}}
      />
      <Text>{name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  pillContainer: {
    width: '48%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: colors.primaryLigth,
    padding: 6,
    borderRadius: 30,
    marginRight: 10,
  },
  img: {
    height: 30,
    width: 30,
    backgroundColor: colors.primary,
    borderRadius: 100,
    marginRight: 10,
  },
});

export default CategoryPillComponent;
