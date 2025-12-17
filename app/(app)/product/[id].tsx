import React, { useMemo } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { products } from "@/data/catalog";
import ImageCarousel from "@/components/ImageCarousel";
import Button from "@/components/Button";
import { ArrowLeft, Tag } from "lucide-react-native";

const ProductDetailModal = () => {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();
  const product = useMemo(() => products.find((p) => p.id === id), [id]);

  if (!product) {
    return (
      <View className="flex-1 bg-white items-center justify-center">
        <Text className="text-lg text-gray-600">Product not found</Text>
        <Button label="Close" className="mt-4" onPress={() => router.back()} />
      </View>
    );
  }

  const discount = Math.max(
    0,
    Math.round(((product.mrp - product.price) / product.mrp) * 100)
  );

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="absolute top-14 left-4 z-10">
        <TouchableOpacity
          onPress={() => router.back()}
          className="bg-white/90 rounded-full p-2 shadow-sm"
        >
          <ArrowLeft size={20} color="#111827" />
        </TouchableOpacity>
      </View>

      <ImageCarousel images={product.images} />

      <View className="p-4">
        <Text className="text-2xl font-bold text-gray-900">{product.name}</Text>
        <Text className="text-gray-500 mt-1">{product.deliveryEta} delivery</Text>

        <View className="flex-row items-end mt-3">
          <Text className="text-3xl font-bold text-green-700">₹ {product.price}</Text>
          <Text className="text-base text-gray-400 line-through ml-2">₹ {product.mrp}</Text>
          {discount > 0 && (
            <View className="flex-row items-center ml-3 bg-green-50 px-2 py-1 rounded-lg">
              <Tag size={14} color="#15803d" />
              <Text className="text-sm font-semibold text-green-700 ml-1">
                Save {discount}%
              </Text>
            </View>
          )}
        </View>

        {product.badge && (
          <View className="bg-red-50 px-3 py-2 rounded-xl mt-3">
            <Text className="text-sm font-semibold text-red-700">{product.badge}</Text>
          </View>
        )}

        <View className="mt-4">
          <Text className="text-lg font-semibold text-gray-900 mb-2">Description</Text>
          <Text className="text-gray-600 leading-6">{product.description}</Text>
        </View>

        {product.tags && product.tags.length > 0 && (
          <View className="mt-4">
            <Text className="text-lg font-semibold text-gray-900 mb-2">Tags</Text>
            <View className="flex-row flex-wrap gap-2">
              {product.tags.map((tag) => (
                <View key={tag} className="bg-gray-100 px-3 py-1.5 rounded-full">
                  <Text className="text-sm font-semibold text-gray-700">{tag}</Text>
                </View>
              ))}
            </View>
          </View>
        )}

        <Button label="Add to cart" className="mt-6" onPress={() => router.back()} />
      </View>
    </ScrollView>
  );
};

export default ProductDetailModal;

