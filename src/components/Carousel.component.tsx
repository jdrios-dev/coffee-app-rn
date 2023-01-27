import {View, StyleSheet, Image, Text, Animated} from 'react-native';
import React, {useState} from 'react';
import colors from '../styles/colors';
import {getFavoriteProducts} from '../data/controller';

const MILLISECONDS_TO_CHANGE = 3800;

const CarouselComponent = () => {
  const [activeProduct, setActiveProduct] = useState(0);
  const [fadeAnimation] = useState(new Animated.Value(0));
  const favoriteProducts = getFavoriteProducts();
  const MAX_ITEMS = favoriteProducts?.length;

  setTimeout(async () => {
    // MAX_ITEMS - 1 = The last product in my array
    console.log(fadeAnimation);
    await fadeIn();
    if (activeProduct === MAX_ITEMS - 1) {
      return setActiveProduct(0);
    }
    setActiveProduct(activeProduct + 1);
    await fadeOut();
  }, MILLISECONDS_TO_CHANGE);

  const fadeIn = () => {
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnimation, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  // const opacity = fadeAnimation.interpolate({
  //   inputRange: [0, 1],
  //   outputRange: [0, 1],
  // });
  // console.log(opacity, fadeAnimation);
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

const ImageAAA = ({img, fadeAnimation}) => {
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
    backgroundColor: colors.secondary,
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
