import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Product } from "@/data/catalog";
import { BadgePercent, Clock4 } from "lucide-react-native";

type Props = {
  product: Product;
  onPress?: () => void;
  className?: string;
};

const ProductCard = ({ product, onPress, className }: Props) => {
  const discount = Math.max(
    0,
    Math.round(((product.mrp - product.price) / product.mrp) * 100)
  );

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.9}
      className={`bg-white rounded-2xl p-3 w-44 ${className}`}
      style={{
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 4,
        elevation: 2,
      }}
    >
      <Image
        source={{ uri: product.images[0] }}
        className="w-full h-24 rounded-xl"
        resizeMode="cover"
      />

      <View className="mt-2">
        <Text className="text-sm font-semibold text-gray-900" numberOfLines={2}>
          {product.name}
        </Text>
        <Text className="text-xs text-gray-500 mt-1">{product.deliveryEta}</Text>

        <View className="flex-row items-center mt-2">
          <Text className="text-lg font-bold text-green-700">₹ {product.price}</Text>
          <Text className="text-xs text-gray-400 line-through ml-2">₹ {product.mrp}</Text>
          {discount > 0 && (
            <View className="flex-row items-center ml-2">
              <BadgePercent size={14} color="#16a34a" />
              <Text className="text-xs text-green-700 ml-1">-{discount}%</Text>
            </View>
          )}
        </View>

        {product.badge && (
          <View className="flex-row items-center bg-red-50 px-2 py-1 rounded-lg mt-2">
            <Clock4 size={14} color="#B91C1C" />
            <Text className="text-xs font-semibold text-red-700 ml-1">
              {product.badge}
            </Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;

