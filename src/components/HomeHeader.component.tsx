import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const HomeHeaderComponent = () => {
  return (
    <View style={[styles.header]}>
      <Text>Santiago</Text>
      <Text>X</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingVertical: 15,
  },
});

export default HomeHeaderComponent;
