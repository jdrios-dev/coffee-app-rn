import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import CategoryPillComponent from './CategoryPill.component';

const CategoriesContainerComponent = () => {
  return (
    <View>
      <View style={[styles.header, styles.headerContainer]}>
        <Text>Beverages</Text>
        <Text>View All</Text>
      </View>
      <View style={styles.categoriesContainer}>
        <CategoryPillComponent />
        <CategoryPillComponent />
        <CategoryPillComponent />
        <CategoryPillComponent />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  categoriesContainer: {
    height: 80,
    width: '100%',
    flexWrap: 'wrap',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  headerContainer: {
    padding: 10,
  },
});

export default CategoriesContainerComponent;
