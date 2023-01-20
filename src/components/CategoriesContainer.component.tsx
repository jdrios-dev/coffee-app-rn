import {View, Text, StyleSheet, Button} from 'react-native';
import React from 'react';
import CategoryPillComponent from './CategoryPill.component';
import colors from '../styles/colors';
import {useNavigation} from '@react-navigation/native';

const CategoriesContainerComponent = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={[styles.header, styles.headerContainer]}>
        <Text style={styles.categoryTitle}>Beverages</Text>
        <Button
          title="View all"
          onPress={() => navigation.navigate('DetailScreen')}
        />
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
  },
  categoryButton: {
    color: colors.secondary,
  },
});

export default CategoriesContainerComponent;
