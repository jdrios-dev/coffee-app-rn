import React, {useState, useRef} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  Animated,
  FlatList,
  Dimensions,
  Easing,
} from 'react-native';
import colors from '../styles/colors';
import {getFavoriteProducts} from '../data/controller';

const {width, height} = Dimensions.get('screen');
const MILLISECONDS_TO_CHANGE = 3800;

const CarouselComponent = () => {
  const [activeProduct, setActiveProduct] = useState(0);
  const favoriteProducts = getFavoriteProducts();
  const MAX_ITEMS = favoriteProducts?.length;

  const translateYImage = new Animated.Value(40);

  Animated.timing(translateYImage, {
    toValue: 0,
    duration: 50,
    useNativeDriver: true,
    easing: Easing.bounce,
  }).start();

  setTimeout(() => {
    // MAX_ITEMS - 1 = The last product in my array
    if (activeProduct === MAX_ITEMS - 1) {
      return setActiveProduct(0);
    }
    setActiveProduct(activeProduct + 1);
  }, MILLISECONDS_TO_CHANGE);

  const scrollX = useRef(new Animated.Value(0)).current;

  /**
   *
   * FROM HERE
   *
   */
  const handleOnScroll = event => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {
        useNativeDriver: false,
      },
    )(event);
  };

  const handleOnViewableItemsChanged = useRef(({viewableItems}: any) => {
    setActiveProduct(viewableItems[0].index);
  }).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  return (
    <View style={styles.carousel}>
      <FlatList
        data={favoriteProducts}
        horizontal
        renderItem={({item}) => {
          console.log(
            '🚀 ~ file: Carousel.component.tsx:150 ~ CarouselComponent ~ item',
            item,
          );

          return (
            <View>
              <Animated.Image
                style={[
                  styles.carouselImg,
                  {
                    transform: [
                      {
                        translateY: translateYImage,
                      },
                    ],
                  },
                ]}
                source={item.image}
                resizeMode="contain"
              />
              <Text style={styles.title}>{item.longName}</Text>
            </View>
          );
        }}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleOnScroll}
        onViewableItemsChanged={handleOnViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
      />

      <View style={styles.indicatorContainer}>
        {Array.from({length: MAX_ITEMS}, (_, idx) => {
          const inputRange = [
            (idx - 1) * width,
            idx * width,
            (idx + 1) * width,
          ];

          const dotWidth = scrollX.interpolate({
            inputRange,
            outputRange: [12, 30, 12],
            extrapolate: 'clamp',
          });

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.2, 1, 0.1],
            extrapolate: 'clamp',
          });

          const backgroundColor = scrollX.interpolate({
            inputRange,
            outputRange: ['#ccc', '#000', '#ccc'],
            extrapolate: 'clamp',
          });
          return (
            <Animated.View
              key={idx}
              style={[
                styles.indicator,
                // eslint-disable-next-line react-native/no-inline-styles
                {
                  width: `${100 / MAX_ITEMS - 1}%`,
                  opacity: activeProduct === idx ? 0.9 : 0.5,
                  backgroundColor,
                },
              ]}
            />
          );
        })}
      </View>
    </View>
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
