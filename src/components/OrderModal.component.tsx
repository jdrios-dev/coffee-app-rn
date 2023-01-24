import {View, Text, Modal, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import colors from '../styles/colors';
import {Sizes as SizesType, Toppings as ToppingsType, toppings} from '../data';
import {ScrollView} from 'react-native-gesture-handler';
import ModalCounterComponent from './ModalCounter.component';

type OrderModalProps = {
  modalVisible: boolean;
  setModalVisible: (item: boolean) => void;
  sizeSelected: SizesType | null;
  setSizeSelected: (size: SizesType) => void;
  toppingSelected: ToppingsType | null;
  setToppingSelected: (topping: ToppingsType) => void;
  sizes: SizesType[];
};

const OrderModalComponent = ({
  modalVisible,
  setModalVisible,
  sizeSelected,
  setSizeSelected,
  toppingSelected,
  setToppingSelected,
  sizes,
}: OrderModalProps) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <TouchableOpacity
        style={styles.spacer}
        onPress={() => setModalVisible(!modalVisible)}
      />

      <View
      //style={styles.centeredView}
      >
        <View style={styles.modalView}>
          {/* Sizes */}
          <Text style={styles.modalTitle}>Drink Size</Text>
          <View style={styles.sizesContaner}>
            {sizes.map(item => (
              <TouchableOpacity
                key={item}
                onPress={() => setSizeSelected(item)}>
                <View
                  style={
                    sizeSelected === item
                      ? styles.sizesItemActive
                      : styles.sizesItem
                  }>
                  <Text
                    style={
                      sizeSelected === item
                        ? styles.sizesItemLabelActive
                        : styles.sizesItemLabel
                    }>
                    {item}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>

          {/* Toppings */}
          <Text style={styles.modalTitle}>Toppings</Text>
          <ScrollView
            style={styles.toppingsContainer}
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            {toppings.map(item => (
              <TouchableOpacity
                key={item}
                onPress={() => setToppingSelected(item)}>
                <View
                  style={
                    toppingSelected === item
                      ? styles.toppingItemActive
                      : styles.toppingItem
                  }>
                  <Text
                    style={
                      toppingSelected === item
                        ? styles.sizesItemLabelActive
                        : styles.sizesItemLabel
                    }>
                    {item}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <ModalCounterComponent />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    marginTop: 'auto',
    backgroundColor: colors.primaryLigth,
    borderRadius: 20,
    paddingVertical: 35,
    paddingBottom: 80,
    alignItems: 'center',
    shadowColor: '#000',
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  spacer: {flex: 1},
  sizesContaner: {
    flexDirection: 'row',
    marginVertical: 10,
    marginBottom: 15,
  },
  sizesItem: {
    height: 70,
    width: 70,
    backgroundColor: colors.white,
    borderRadius: 50,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sizesItemActive: {
    height: 70,
    width: 70,
    backgroundColor: colors.secondary,
    borderRadius: 50,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sizesItemLabel: {
    textTransform: 'capitalize',
  },
  sizesItemLabelActive: {
    textTransform: 'capitalize',
    color: colors.white,
    fontWeight: '600',
  },
  toppingItemActive: {
    width: 70,
    backgroundColor: colors.secondary,
    borderRadius: 50,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  toppingItem: {
    width: 70,
    backgroundColor: colors.white,
    borderRadius: 50,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  toppingsContainer: {
    flexDirection: 'row',
    width: '100%',
    paddingVertical: 10,
    marginBottom: 15,
  },
});

export default OrderModalComponent;
