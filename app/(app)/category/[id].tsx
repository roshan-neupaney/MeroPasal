import ProductCard from "@/components/ProductCard";
import SectionHeader from "@/components/SectionHeader";
import { categories, products } from "@/data/catalog";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useMemo } from "react";
import { FlatList, Text, View } from "react-native";

const CategoryListing = () => {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();

  const category = categories.find((c) => c.id === id);
  const items = useMemo(() => products.filter((p) => p.categoryId === id), [id]);

  return (
    <View className="flex-1 p-3">
      <SectionHeader title={category?.name ?? "Products"} />
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        className="p-1"
        columnWrapperStyle={{ justifyContent: "space-between", marginBottom: 12 }}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            onPress={() =>
              router.push({ pathname: "/(app)/product/[id]", params: { id: item.id } })
            }
            className="mx-1"
          />
        )}
        ListEmptyComponent={
          <View className="mt-10 items-center">
            <Text className="text-gray-500">No products available in this category.</Text>
          </View>
        }
      />
    </View>
  );
};

export default CategoryListing;

