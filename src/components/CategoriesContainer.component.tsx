import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import CategoryPillComponent from './CategoryPill.component';
import colors from '../styles/colors';
import {useNavigation} from '@react-navigation/native';
import {Category} from '../data/index';
import {getProductosByCategory} from '../data/controller';

type CategoryContainerProps = {
  category: Category;
};

const CategoriesContainerComponent = ({category}: CategoryContainerProps) => {
  const navigation = useNavigation();
  const products = getProductosByCategory(category);

  return (
    <View>
      <View style={[styles.header, styles.headerContainer]}>
        <Text style={styles.categoryTitle}>{category}</Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('CategoryScreen', {
              category: category,
            })
          }>
          <Text style={styles.categoryButton}>View all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.categoriesContainer}>
        {products.map(item => (
          <CategoryPillComponent key={item.id} product={item} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  categoriesContainer: {
    height: 120,
    width: '100%',
    flexWrap: 'wrap',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  headerContainer: {
    paddingVertical: 10,
    alignItems: 'center',
  },
  categoryTitle: {
    fontSize: 20,
    textTransform: 'capitalize',
  },
  categoryButton: {
    color: colors.secondary,
  },
});

export default CategoriesContainerComponent;
