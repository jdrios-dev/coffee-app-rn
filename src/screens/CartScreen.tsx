import React, {useContext} from 'react';
//import {useNavigation} from '@react-navigation/native';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import ScreenHeaderBackComponent from '../components/ScreenHeaderBack.component';
import {CartContext, Order} from '../context/';
import {Product} from '../data';
import colors from '../styles/colors';

const CartScreen = ({navigation}) => {
  const {
    state: {orders},
    dispatch,
  } = useContext(CartContext);
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          padding: 15,
        }}>
        <ScreenHeaderBackComponent title={'Your Order'} />
        {/* TODO REFACTOR THIS INTO COMPONENTS */}
        {Object.values(orders).map((order: Order, index: number) => (
          <View key={index} style={styles.container}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image source={order.product.image} style={styles.image} />
              <Text style={styles.title}>{order.product.name}</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                style={styles.circularButton}
                onPress={() => {
                  dispatch({
                    type: 'REMOVE_UNIT',
                    payload: {id: order.id},
                  });
                }}>
                <Text>-</Text>
              </TouchableOpacity>
              <Text style={{paddingVertical: 5, paddingHorizontal: 10}}>
                {order.quantity}
              </Text>
              <TouchableOpacity
                style={styles.circularButton}
                onPress={() => {
                  dispatch({
                    type: 'ADD_UNIT',
                    payload: {id: order.id},
                  });
                }}>
                <Text>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
      <View style={{flex: 1}} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.buttonPay}
          onPress={() => {
            navigation.navigate('HomeScreen', {});
          }}>
          <Text style={styles.buttonAddBagText}>Pay now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 5,
    marginBottom: 10,
    padding: 10,
    backgroundColor: colors.primaryLigth,
    borderRadius: 20,
  },
  title: {
    fontWeight: '600',
    fontSize: 18,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid',
  },
  buttonContainer: {
    backgroundColor: colors.primary,
    width: '100%',
    height: 80,
    borderTopStartRadius: 24,
    borderTopEndRadius: 24,
    justifyContent: 'center',
  },
  circularButton: {
    borderColor: colors.secondary,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 100,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  buttonPay: {
    textAlign: 'center',
    backgroundColor: colors.secondary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 15,
    borderRadius: 20,
  },
  buttonAddBagText: {
    color: colors.white,
    fontWeight: '600',
    fontSize: 16,
  },
});

export default CartScreen;
