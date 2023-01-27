/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState, useRef} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  Animated,
  FlatList,
  Dimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import colors from '../styles/colors';
import {getFavoriteProducts} from '../data/controller';

const {width} = Dimensions.get('screen');
const MILLISECONDS_TO_CHANGE = 3800;

const CarouselComponent = () => {
  const [activeProduct, setActiveProduct] = useState(0);
  const favoriteProducts = getFavoriteProducts();
  const MAX_ITEMS = favoriteProducts?.length;
  const flatListRef = useRef<FlatList>(null);

  setTimeout(() => {
    // MAX_ITEMS - 1 = The last product in my array
    if (activeProduct === MAX_ITEMS - 1) {
      flatListRef?.current?.scrollToIndex({animated: true, index: 0});
      return setActiveProduct(0);
    }
    setActiveProduct(activeProduct + 1);
    flatListRef?.current?.scrollToIndex({
      animated: true,
      index: activeProduct + 1,
    });
  }, MILLISECONDS_TO_CHANGE);

  const scrollX = useRef(new Animated.Value(0)).current;

  /**
   *
   * FROM HERE
   *
   */
  const handleOnScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
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

  /*
   * Cant use this on RN web, because all items are rendered at once
   */
  const handleOnViewableItemsChanged = useRef(({viewableItems}: any) => {
    console.log(
      '🚀 ~ file: Carousel.component.tsx:65 ~ handleOnViewableItemsChanged ~ viewableItems',
      viewableItems,
    );
    viewableItems[0]?.index && setActiveProduct(viewableItems[0].index);
  }).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  return (
    <View style={styles.carousel}>
      <FlatList
        data={favoriteProducts}
        ref={ref => (flatListRef.current = ref)}
        renderItem={({item, index}) => (
          <CarouselItem item={item} index={index} />
        )}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={handleOnScroll}
        // onViewableItemsChanged={handleOnViewableItemsChanged}
        // viewabilityConfig={viewabilityConfig}
        // onEndReached={() => {
        //   console.log("end reached");
        //   setActiveProduct(0);
        // }}
        onEndReachedThreshold={0.3}
        getItemLayout={(_, index) => ({
          length: 50,
          offset: (width - 30) * index,
          index,
        })}
      />

      <Paginator
        scrollX={scrollX}
        MAX_ITEMS={MAX_ITEMS}
        activeProduct={activeProduct}
      />
    </View>
  );
};

const CarouselItem = ({index, item}: any) => (
  <View key={index}>
    <Image
      style={[styles.carouselImg]}
      source={item.image}
      resizeMode="cover"
    />
    <Text style={styles.title}>{item.longName}</Text>
  </View>
);

const Paginator = ({scrollX, MAX_ITEMS, activeProduct}: any) => (
  <View style={styles.indicatorContainer}>
    {Array.from({length: MAX_ITEMS}, (_, idx) => {
      const inputRange = [(idx - 1) * width, idx * width, (idx + 1) * width];
      console.log(
        '🚀 ~ file: Carousel.component.tsx:119 ~ {Array.from ~ inputRange',
        inputRange,
      );

      const dotWidth = scrollX.interpolate({
        inputRange,
        outputRange: [12, 100 / MAX_ITEMS - 1, 12],
        extrapolate: 'clamp',
      });

      const opacity = scrollX.interpolate({
        inputRange,
        outputRange: [0.2, 0.9, 0.1],
        extrapolate: 'clamp',
      });

      const backgroundColor = scrollX.interpolate({
        inputRange,
        outputRange: ['#000', '#FFF', '#000'],
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
);

const styles = StyleSheet.create({
  carousel: {
    backgroundColor: colors.secondary,
    height: 250,
    borderRadius: 10,
    marginBottom: 24,
    position: 'relative',
    overflow: 'hidden',
  },
  carouselImg: {
    width: width - 20,
    height: 250,
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
