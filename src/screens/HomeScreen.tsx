import React from 'react';
//import {useNavigation} from '@react-navigation/native';
import {ScrollView, SafeAreaView} from 'react-native';
import CarouselComponent from '../components/Carousel.component';
import CategoriesContainerComponent from '../components/CategoriesContainer.component';
import HomeHeaderComponent from '../components/HomeHeader.component';
import {categories} from '../data';

const HomeScreen = () => {
  // const navigation = useNavigation();

  return (
    <SafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          padding: 15,
        }}>
        <HomeHeaderComponent />
        <CarouselComponent />

        {categories.map(item => (
          <CategoriesContainerComponent key={item} category={item} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
