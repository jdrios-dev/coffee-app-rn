import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

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
    width: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  img: {
    height: 30,
    width: 30,
    backgroundColor: 'chocolate',
    borderRadius: 100,
    marginRight: 10,
  },
});

export default CategoryPillComponent;
