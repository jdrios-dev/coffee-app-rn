import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {CircularButton} from './ModalCounter.component';

type ScreenHeaderBackProps = {
  title: string;
};

const ScreenHeaderBackComponent = ({title}: ScreenHeaderBackProps) => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <View style={styles.buttonBack}>
        <CircularButton onPress={() => navigation.pop()}>
          <Image
            style={styles.img}
            source={require('../assets/IconArrow.png')}
          />
        </CircularButton>
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
  img: {
    width: 30,
    resizeMode: 'contain',
    flex: 1,
  },
});

export default ScreenHeaderBackComponent;
