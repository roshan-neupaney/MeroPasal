import CategoryCard from "@/components/CategoryCard";
import HomeHeader from "@/components/HomeHeader";
import ProductCard from "@/components/ProductCard";
import SearchBar from "@/components/SearchBar";
import SectionHeader from "@/components/SectionHeader";
import { categories, products } from "@/data/catalog";
import { useRouter } from "expo-router";
import React, { useMemo } from "react";
import {
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const Home = () => {
  const router = useRouter();

  const topCategories = useMemo(() => categories.slice(0, 4), []);
  const featuredProducts = useMemo(() => products.slice(0, 6), []);
  const recommendedProducts = useMemo(
    () =>
      products
        .filter(
          (p) =>
            p.tags?.includes("Breakfast") ||
            p.tags?.includes("Protein") ||
            p.categoryId === "breakfast"
        )
        .slice(0, 6),
    []
  );
  const householdEssentials = useMemo(
    () =>
      products
        .filter((p) => ["household", "health-wellness"].includes(p.categoryId))
        .slice(0, 6),
    []
  );
  const trendingSnacks = useMemo(
    () => products.filter((p) => p.categoryId === "snacks").slice(0, 6),
    []
  );

  const handleOpenCategory = (id: string) => {
    router.push({ pathname: "/(app)/category/[id]", params: { id } });
  };

  const handleOpenProduct = (id: string) => {
    router.push({ pathname: "/(app)/product/[id]", params: { id } });
  };

  return (
    <ScrollView
      className="flex-1 bg-gray-50"
      showsVerticalScrollIndicator={false}
    >
      <HomeHeader />

      <TouchableOpacity
        onPress={() => router.push("/(app)/search")}
        activeOpacity={0.9}
        className="px-4"
      >
        <SearchBar
          value=""
          onChangeText={() => {}}
          editable={false}
          placeholder="Search here..."
        />
      </TouchableOpacity>

      <View className="mt-5 px-4">
        <SectionHeader
          title="Categories"
          actionLabel="See all"
          onPressAction={() => router.push("/(app)/categories")}
        />
        <FlatList
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          className="py-1"
          renderItem={({ item }) => (
            <CategoryCard
              item={item}
              onPress={() => handleOpenCategory(item.id)}
            />
          )}
        />
      </View>

      <View className="mt-6 px-4">
        <SectionHeader
          title="Top Picks for You"
          actionLabel="View more"
          onPressAction={() => router.push("/(app)/category/fresh")}
        />
        <FlatList
          data={featuredProducts}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          className="py-1"
          renderItem={({ item }) => (
            <ProductCard
              product={item}
              onPress={() => handleOpenProduct(item.id)}
              className="mr-3"
            />
          )}
        />
      </View>

      <View className="my-6 px-4">
        <SectionHeader title="Quick Access" />
        <View className="flex-row flex-wrap gap-3">
          {topCategories.map((cat) => (
            <TouchableOpacity
              key={cat.id}
              className="bg-white px-4 py-3 rounded-2xl shadow-sm"
              style={{
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.08,
                shadowRadius: 3,
                elevation: 2,
              }}
              onPress={() => handleOpenCategory(cat.id)}
            >
              <Text className="text-sm font-semibold text-gray-900">
                {cat.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View className="mt-2 px-4">
        <SectionHeader
          title="Breakfast & Protein Picks"
          actionLabel="View all"
          onPressAction={() => router.push("/(app)/category/breakfast")}
        />
        <FlatList
          data={recommendedProducts}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          className="py-1"
          renderItem={({ item }) => (
            <ProductCard
              product={item}
              onPress={() => handleOpenProduct(item.id)}
              className="mr-3"
            />
          )}
        />
      </View>

      <View className="mt-6 px-4">
        <SectionHeader
          title="Household & Wellness"
          actionLabel="Shop all"
          onPressAction={() => router.push("/(app)/category/household")}
        />
        <FlatList
          data={householdEssentials}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          className="py-1"
          renderItem={({ item }) => (
            <ProductCard
              product={item}
              onPress={() => handleOpenProduct(item.id)}
              className="mr-3"
            />
          )}
        />
      </View>

      <View className="mt-6 px-4 mb-6">
        <SectionHeader
          title="Snack Attack"
          actionLabel="See more"
          onPressAction={() => router.push("/(app)/category/snacks")}
        />
        <FlatList
          data={trendingSnacks}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          className="py-1"
          renderItem={({ item }) => (
            <ProductCard
              product={item}
              onPress={() => handleOpenProduct(item.id)}
              className="mr-3"
            />
          )}
        />
      </View>
    </ScrollView>
  );
};

export default Home;
