import {View, Text, StyleSheet, Button} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const ScreenHeaderBackComponent = ({title}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <View style={styles.buttonBack}>
        <Button title="X" onPress={() => navigation.pop()} />
      </View>
      <Text style={styles.titleMenu}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginBottom: 16,
    width: '100%',
  },
  buttonBack: {
    position: 'absolute',
    left: 0,
  },
  titleMenu: {
    fontSize: 18,
    fontWeight: '600',
  },
});

export default ScreenHeaderBackComponent;
