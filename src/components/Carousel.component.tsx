import {View, StyleSheet, Text, Animated} from 'react-native';
import React, {useState} from 'react';
import colors from '../styles/colors';
import {getFavoriteProducts} from '../data/controller';

const MILLISECONDS_TO_CHANGE = 3800;

const CarouselComponent = () => {
  const [activeProduct, setActiveProduct] = useState(0);
  const [fadeAnimation] = useState(new Animated.Value(1));
  const favoriteProducts = getFavoriteProducts();
  const MAX_ITEMS = favoriteProducts?.length;

  const fadeInOut = () => {
    Animated.timing(fadeAnimation, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start(() => {
      // MAX_ITEMS - 1 = The last product in my array
      activeProduct === MAX_ITEMS - 1
        ? setActiveProduct(0)
        : setActiveProduct(activeProduct + 1);
      Animated.timing(fadeAnimation, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }).start();
    });
  };

  setTimeout(() => {
    fadeInOut();
  }, MILLISECONDS_TO_CHANGE);

  return (
    <View style={styles.carousel}>
      <ImageAAA
        img={favoriteProducts[activeProduct].image}
        fadeAnimation={fadeAnimation}
      />
      <View style={styles.indicatorContainer}>
        {Array.from({length: MAX_ITEMS}, (_, i) => (
          <View
            key={i}
            style={[
              styles.indicator,
              // eslint-disable-next-line react-native/no-inline-styles
              {
                width: `${100 / MAX_ITEMS - 1}%`,
                opacity: activeProduct === i ? 0.9 : 0.5,
              },
            ]}
          />
        ))}
      </View>
      <Text style={styles.title}>
        {favoriteProducts[activeProduct].longName}
      </Text>
    </View>
  );
};

const ImageAAA = ({
  img,
  fadeAnimation,
}: {
  img: any;
  fadeAnimation: Animated.Value;
}) => {
  return (
    <Animated.Image
      style={[
        styles.carouselImg,
        {
          opacity: fadeAnimation,
        },
      ]}
      source={img}
    />
  );
};

const styles = StyleSheet.create({
  carousel: {
    backgroundColor: colors.primaryLigth,
    height: 250,
    borderRadius: 10,
    marginBottom: 24,
    position: 'relative',
  },
  carouselImg: {
    width: 'auto',
    height: '100%',
    borderRadius: 10,
  },
  indicatorContainer: {
    position: 'absolute',
    top: 10,
    paddingHorizontal: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  indicator: {
    backgroundColor: colors.white,
    opacity: 0.5,
    height: 5,
    borderRadius: 5,
  },
  title: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    fontSize: 24,
    fontWeight: '600',
    color: colors.white,
    textShadowColor: 'rgba(0, 0, 0, 0.6)',
    textShadowOffset: {width: 0, height: 5},
    textShadowRadius: 7,
    padding: 10,
  },
});

export default CarouselComponent;
