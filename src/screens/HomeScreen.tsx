import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import CategoriesContainerComponent from '../components/CategoriesContainer.component';
import CategoryPillComponent from '../components/CategoryPill.component';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <ScrollView
        style={{
          padding: 15,
        }}>
        <View style={[styles.header, styles.headerContainer]}>
          <Text>Santiago</Text>
          <Text>X</Text>
        </View>
        <View style={styles.carousel} />

        <CategoriesContainerComponent />
        <CategoriesContainerComponent />
        <CategoriesContainerComponent />
        <CategoriesContainerComponent />
        <CategoriesContainerComponent />
        <CategoriesContainerComponent />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  carousel: {
    backgroundColor: 'chocolate',
    height: 250,
    borderRadius: 10,
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingVertical: 15,
  },
});

export default HomeScreen;
