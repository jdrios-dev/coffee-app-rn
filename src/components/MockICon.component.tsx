import {View, StyleSheet} from 'react-native';
import React from 'react';
import colors from '../styles/colors';

type MockIConProps = {
  size: number;
};

const MockIConComponent = ({size}: MockIConProps) => {
  return <View style={{...styles.icon, height: size, width: size}} />;
};

const styles = StyleSheet.create({
  icon: {
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 50,
  },
});

export default MockIConComponent;
