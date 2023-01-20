import React from 'react';
//import {useNavigation} from '@react-navigation/native';
import {Text, View, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import CarouselComponent from '../components/Carousel.component';
import CategoriesContainerComponent from '../components/CategoriesContainer.component';
import HomeHeaderComponent from '../components/HomeHeader.component';

const HomeScreen = () => {
  // const navigation = useNavigation();
  return (
    <SafeAreaView>
      <ScrollView
        style={{
          padding: 15,
        }}>
        <HomeHeaderComponent />
        <CarouselComponent />

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

export default HomeScreen;
