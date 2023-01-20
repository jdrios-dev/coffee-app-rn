import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import MockIConComponent from './MockICon.component';
import colors from '../styles/colors';

const HomeHeaderComponent = () => {
  return (
    <View style={[styles.header]}>
      <View>
        <Text style={styles.hello}>Good morning,</Text>
        <Text style={styles.name}>Jimmy Sullivan </Text>
      </View>
      <MockIConComponent size={30} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingVertical: 15,
    alignItems: 'center',
  },
  hello: {
    color: colors.textClear,
  },
  name: {
    fontSize: 18,
  },
});

export default HomeHeaderComponent;
