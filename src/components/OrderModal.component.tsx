import {View, Text, Modal, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import colors from '../styles/colors';
import {Sizes, Topping, toppings} from '../data';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import ModalCounterComponent from './ModalCounter.component';
import {Order} from '../context';

type OrderModalProps = {
  modalVisible: boolean;
  setModalVisible: (item: boolean) => void;
  order: Order;
  handleOrderChange: (fieldToUpdate: any) => void;
  addToCart: () => void;
};

const OrderModalComponent = ({
  modalVisible,
  setModalVisible,
  order,
  handleOrderChange,
  addToCart,
}: OrderModalProps) => {
  const isSelected = (item: Topping) =>
    order.toppings?.find((topping: Topping) => topping.id === item.id);
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
            {order.product.sizes.map((item: Sizes) => (
              <TouchableOpacity
                key={item}
                onPress={() => handleOrderChange({size: item})}>
                <View
                  style={
                    order?.size === item
                      ? styles.sizesItemActive
                      : styles.sizesItem
                  }>
                  <Text
                    style={
                      order?.size === item
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
            {toppings.map((item: Topping) => (
              <TouchableOpacity
                key={item.id}
                onPress={() =>
                  handleOrderChange({
                    toppings: item,
                  })
                }>
                <View
                  style={
                    isSelected(item)
                      ? styles.toppingItemActive
                      : styles.toppingItem
                  }>
                  <Text
                    style={
                      isSelected(item)
                        ? styles.sizesItemLabelActive
                        : styles.sizesItemLabel
                    }>
                    {item.name}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <Text style={styles.modalTitle}>Additional Req</Text>
          <TextInput
            value={order.note}
            style={styles.noteContainer}
            onChangeText={value => {
              handleOrderChange({note: value});
            }}
          />

          <ModalCounterComponent
            addToCart={addToCart}
            order={order}
            handleOrderChange={handleOrderChange}
          />
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
    paddingBottom: '50%',
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
  noteContainer: {
    width: '100%',
    paddingVertical: 10,
    marginBottom: 15,
    backgroundColor: colors.white,
  },
});

export default OrderModalComponent;
