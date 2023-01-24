import React, {useState} from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import OrderModalComponent from '../components/OrderModal.component';
import ScreenHeaderBackComponent from '../components/ScreenHeaderBack.component';
import {Product, Sizes, Toppings} from '../data';
import {getProductById} from '../data/controller';
import colors from '../styles/colors';

const DetailScreen = ({route}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [sizeSelected, setSizeSelected] = useState<Sizes | null>(null);
  const [toppingSelected, setToppingSelected] = useState<Toppings | null>(null);
  const {id} = route.params;
  const product: Product = getProductById(id);
  return (
    <SafeAreaView>
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          alignItems: 'center',
          padding: 15,
        }}>
        <ScreenHeaderBackComponent title="Detail" />

        <View style={styles.imageCont}>
          <Image style={styles.image} source={product.image} />
        </View>
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
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  imageCont: {
    backgroundColor: colors.primaryLigth,
    width: 130,
    height: 190,
    borderRadius: 10,
    marginBottom: 16,
  },
  image: {
    width: 'auto',
    height: '100%',
    borderRadius: 10,
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
