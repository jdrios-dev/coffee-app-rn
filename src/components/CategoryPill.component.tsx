import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import colors from '../styles/colors';

function CategoryPillComponent() {
  return (
    <View style={styles.pillContainer}>
      <Image
        style={styles.img}
        source={{uri: 'https://icons8.com/icon/K-6n6MuHwv13/coffee-to-go'}}
      />
      <Text>Chocolate</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  pillContainer: {
    width: '48%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: colors.primaryLigth,
    padding: 8,
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
