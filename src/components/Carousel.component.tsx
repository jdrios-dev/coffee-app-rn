import {View, StyleSheet} from 'react-native';
import React from 'react';
import colors from '../styles/colors';

const CarouselComponent = () => {
  return (
    <View>
      <View style={styles.carousel} />
    </View>
  );
};

const styles = StyleSheet.create({
  carousel: {
    backgroundColor: colors.primary,
    height: 250,
    borderRadius: 10,
    marginBottom: 24,
  },
});

export default CarouselComponent;
