import SectionHeader from "@/components/SectionHeader";
import { categories } from "@/data/catalog";
import { useRouter } from "expo-router";
import React from "react";
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

const CategoriesScreen = () => {
  const router = useRouter();

  return (
    <View className="flex-1 p-3">
      <SectionHeader title="All Categories" />
      <FlatList
        data={categories}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{ justifyContent: "space-between", marginBottom: 12 }}
        className="p-1"
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => router.push({ pathname: "/(app)/category/[id]", params: { id: item.id } })}
            className="bg-white rounded-2xl p-3 w-[48%] shadow-sm"
            style={{
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.08,
              shadowRadius: 3,
              elevation: 2,
            }}
          >
            <Image source={{ uri: item.image }} className="h-24 rounded-xl" resizeMode="cover" />
            <Text className="text-base font-semibold text-gray-900 mt-2" numberOfLines={2}>
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default CategoriesScreen;

