import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import CardProductComponent from '../components/CardProduct.component';
import {categories} from '../data';
import {getProductosByCategory} from '../data/controller';
import colors from '../styles/colors';

const CategoryScreen = ({route, navigation}) => {
  const {category: defaultCategory} = route.params;

  const [category, setCategory] = useState(defaultCategory);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const result = getProductosByCategory(category);
    setProducts(result);
  }, [category]);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.buttonBack}>
          <Button title="X" onPress={() => navigation.pop()} />
        </View>
        <Text style={styles.titleMenu}>Menu</Text>
      </View>
      {/* Filter */}

      <View style={styles.categoryContainer}>
        {categories.map(item => (
          <TouchableOpacity onPress={() => setCategory(item)}>
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
            />
          ))}
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {margin: 15},
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginBottom: 16,
  },
  buttonBack: {
    position: 'absolute',
    left: 0,
  },
  titleMenu: {
    fontSize: 18,
    fontWeight: '600',
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
