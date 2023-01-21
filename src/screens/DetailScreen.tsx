import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View, Modal, Alert} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ScreenHeaderBackComponent from '../components/ScreenHeaderBack.component';
import {Product} from '../data';
import {getProductById} from '../data/controller';
import colors from '../styles/colors';

const DetailScreen = ({route}) => {
  const [modalVisible, setModalVisible] = useState(false);
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

        <View style={styles.image} />
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.description}>{product.description}</Text>

        <TouchableOpacity
          style={styles.buttonAddBag}
          onPress={() => setModalVisible(!modalVisible)}>
          <Text style={styles.buttonAddBagText}>Add to bag</Text>
        </TouchableOpacity>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.spacer} />
          <View
          //style={styles.centeredView}
          >
            <View style={styles.modalView}>
              <Text style={styles.modalTitle}>Drink Size</Text>
              <TouchableOpacity
                style={[styles.buttonAddBag]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.buttonAddBagText}>Hide Modal</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
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
  description: {marginBottom: 16},
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
  modalView: {
    marginTop: 'auto',
    backgroundColor: colors.primaryLigth,
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  spacer: {flex: 1},
});

export default DetailScreen;
