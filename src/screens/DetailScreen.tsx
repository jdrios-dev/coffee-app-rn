import {useNavigation} from '@react-navigation/native';
import React, {useState, useContext, useEffect} from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import OrderModalComponent from '../components/OrderModal.component';
import ScreenHeaderBackComponent from '../components/ScreenHeaderBack.component';
import {CartContext, Order} from '../context';
import {Product, Sizes, Topping} from '../data';
import {getProductById} from '../data/controller';
import colors from '../styles/colors';

const DetailScreen = ({route}) => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const {state, dispatch} = useContext(CartContext);
  const {id} = route.params;
  const product: Product = getProductById(id);
  const [order, setOrder] = useState<Order>({
    id: `ìtem_${state.size}`,
    product,
    size: null,
    toppings: [],
    note: '',
    quantity: 0,
    price: 0,
  });

  useEffect(() => {
    setOrder({
      ...order,
      price:
        order.product.price +
        order.toppings?.reduce((acc, cur) => acc + cur.price, 0),
    });
  }, [order]);

  const handleStartOrder = () => {
    setOrder({
      ...order,
      price: product.price,
      quantity: 1,
    });
    setModalVisible(!modalVisible);
  };

  const handleOrderChange = (fieldToUpdate: any) => {
    // if the fieldToUpdate is a topping, we will update the toppings array
    if (fieldToUpdate.toppings) {
      // check if the topping already exists in the order
      const toppingExists = order.toppings?.find(
        (topping: Topping) => topping.id === fieldToUpdate.toppings.id,
      );
      // if the topping exists, we will filter it out else we add it
      setOrder({
        ...order,
        toppings: !toppingExists
          ? [...order.toppings, fieldToUpdate.toppings]
          : [...order.toppings].filter(
              (topping: Topping) => topping.id !== fieldToUpdate.toppings.id,
            ),
      });
    } else {
      // if the fieldToUpdate is not a topping, we will update the order state
      setOrder({
        ...order,
        ...fieldToUpdate,
      });
    }
  };

  const addToCart = async () => {
    await dispatch({
      type: 'ADD_ORDER_ITEM',
      payload: order,
    });
    setModalVisible(false);
    navigation.navigate('HomeScreen', {});
  };

  return (
    <SafeAreaView>
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          alignItems: 'center',
          padding: 15,
        }}>
        <ScreenHeaderBackComponent title="Detail" />

        <Image source={product.image} style={styles.image} />
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.description}>{product.description}</Text>

        <TouchableOpacity
          style={styles.buttonAddBag}
          onPress={handleStartOrder}>
          <Text style={styles.buttonAddBagText}>Add to bag</Text>
        </TouchableOpacity>

        <OrderModalComponent
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          order={order}
          handleOrderChange={handleOrderChange}
          addToCart={addToCart}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    backgroundColor: colors.primaryLigth,
    width: 130,
    height: 190,
    borderRadius: 10,
    marginBottom: 16,
  },
  title: {
    fontWeight: '600',
    fontSize: 16,
    marginBottom: 16,
  },
  description: {marginBottom: 16, color: colors.textClear},
  buttonAddBag: {
    backgroundColor: colors.secondary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  buttonAddBagText: {
    color: colors.white,
    fontWeight: '600',
    fontSize: 16,
  },
});

export default DetailScreen;
