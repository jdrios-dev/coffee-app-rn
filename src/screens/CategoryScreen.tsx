import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import CardProductComponent from '../components/CardProduct.component';
import {categories} from '../data';
import {getProductosByCategory} from '../data/controller';
import colors from '../styles/colors';
import {Product} from '../data/index';
import ScreenHeaderBackComponent from '../components/ScreenHeaderBack.component';

const CategoryScreen = ({route, navigation}) => {
  const {category: defaultCategory} = route.params;

  const [category, setCategory] = useState(defaultCategory);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const result: Product[] = getProductosByCategory(category);
    setProducts(result);
  }, [category]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ScreenHeaderBackComponent title="Menu" />
        {/* Filter */}

        <View style={styles.categoryContainer}>
          {categories.map(item => (
            <TouchableOpacity key={item} onPress={() => setCategory(item)}>
              <View
                style={
                  item === category
                    ? styles.categoryItemActive
                    : styles.categoryItem
                }>
                <Text
                  key={item}
                  style={
                    item === category
                      ? styles.categoryLabelActive
                      : styles.categoryLabel
                  }>
                  {item}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Products */}
        {!products.length ? (
          <Text>Loading...</Text>
        ) : (
          <View style={styles.productsGrid}>
            {products.map(item => (
              <CardProductComponent
                key={item.id}
                name={item.name}
                price={item.price}
                image={item.image}
                id={item.id}
              />
            ))}
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  productsGrid: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: 'auto',
  },
  categoryContainer: {
    borderRadius: 20,
    backgroundColor: colors.primaryLigth,
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    width: 110,
    alignSelf: 'center',
  },
  categoryItem: {
    marginHorizontal: 5,
  },
  categoryItemActive: {
    backgroundColor: colors.secondary,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  categoryLabel: {
    textTransform: 'capitalize',
    color: colors.textClear,
  },
  categoryLabelActive: {
    textTransform: 'capitalize',
    color: colors.primary,
  },
});

export default CategoryScreen;
