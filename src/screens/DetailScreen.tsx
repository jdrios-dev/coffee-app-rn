import {useNavigation} from '@react-navigation/native';
import React, {useState, useContext} from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import OrderModalComponent from '../components/OrderModal.component';
import ScreenHeaderBackComponent from '../components/ScreenHeaderBack.component';
import {CartContext} from '../context';
import {Product, Sizes, Toppings} from '../data';
import {getProductById} from '../data/controller';
import colors from '../styles/colors';

const DetailScreen = ({route}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [sizeSelected, setSizeSelected] = useState<Sizes | null>(null);
  const [additionalText, setAdditionalText] = useState<string>('');
  const [toppingSelected, setToppingSelected] = useState<Toppings | null>(null);

  const navigation = useNavigation();

  const {id} = route.params;
  const product: Product = getProductById(id);

  const {dispatch} = useContext(CartContext);

  const addToCart = async () => {
    await dispatch({
      type: 'ADD_PRODUCT',
      payload: {product, sizeSelected, toppingSelected, additionalText},
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

        <Image style={styles.image} source={product.image} />

        <Text style={styles.title}>{product.longName}</Text>
        <Text style={styles.description}>{product.description}</Text>

        <TouchableOpacity
          style={styles.buttonAddBag}
          onPress={() => setModalVisible(!modalVisible)}>
          <Text style={styles.buttonAddBagText}>Add to bag</Text>
        </TouchableOpacity>

        <OrderModalComponent
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          sizeSelected={sizeSelected}
          setSizeSelected={setSizeSelected}
          sizes={product.sizes}
          toppingSelected={toppingSelected}
          setToppingSelected={setToppingSelected}
          additionalText={additionalText}
          setAdditionalText={setAdditionalText}
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
