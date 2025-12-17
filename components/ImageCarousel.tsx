import React, { useRef, useState, useCallback } from "react";
import { FlatList, Image, View, useWindowDimensions } from "react-native";

type Props = {
  images: string[];
};

const ImageCarousel = ({ images }: Props) => {
  const { width } = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const viewabilityConfig = { itemVisiblePercentThreshold: 60 };
  const onViewableItemsChanged = useCallback(({ viewableItems }: any) => {
    if (viewableItems?.length > 0 && viewableItems[0].index !== null) {
      setIndex(viewableItems[0].index);
    }
  }, []);
  const viewabilityConfigCallbackPairs = useRef([
    { viewabilityConfig, onViewableItemsChanged },
  ]);

  return (
    <View>
      <FlatList
        data={images}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, idx) => `${item}-${idx}`}
        renderItem={({ item }) => (
          <Image
            source={{ uri: item }}
            style={{ width, height: 320 }}
            className="bg-gray-100"
            resizeMode="cover"
          />
        )}
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
      />

      <View className="flex-row justify-center mt-3">
        {images.map((_, i) => (
          <View
            key={i}
            className={`h-2 rounded-full mx-1 ${index === i ? "w-6 bg-primary" : "w-2 bg-gray-300"}`}
          />
        ))}
      </View>
    </View>
  );
};

export default ImageCarousel;

