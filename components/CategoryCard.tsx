import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Category } from "@/data/catalog";

type Props = {
  item: Category;
  onPress?: () => void;
};

const CategoryCard = ({ item, onPress }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.85}
      className="w-28 mr-3 rounded-2xl bg-white shadow-sm"
      style={{
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 4,
        elevation: 2,
      }}
    >
      <Image
        source={{ uri: item.image }}
        className="w-full h-24 rounded-t-2xl"
        resizeMode="cover"
      />
      <View className="p-3">
        <Text className="text-sm font-semibold text-gray-900" numberOfLines={2}>
          {item.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryCard;

