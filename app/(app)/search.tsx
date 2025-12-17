import ProductCard from "@/components/ProductCard";
import SearchBar from "@/components/SearchBar";
import { categories, products } from "@/data/catalog";
import { useRouter } from "expo-router";
import React, { useMemo, useState } from "react";
import { FlatList, ScrollView, Text, TouchableOpacity, View } from "react-native";

const SearchScreen = () => {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const popularSearches = useMemo(
    () => ["milk", "rice", "detergent", "coffee", "dog food", "noodles"],
    []
  );
  const suggested = useMemo(() => products.slice(0, 6), []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = [...products];

    if (selectedCategory !== "all") {
      list = list.filter((p) => p.categoryId === selectedCategory);
    }

    if (q) {
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.tags?.some((tag) => tag.toLowerCase().includes(q))
      );
    }

    return list;
  }, [query, selectedCategory]);

  const handleFillSearch = (text: string) => {
    setQuery(text);
  };

  return (
    <View className="flex-1 bg-gray-50">
      <FlatList
        className="px-4 pt-4"
        data={filtered}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between", marginBottom: 12 }}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            onPress={() =>
              router.push({ pathname: "/(app)/product/[id]", params: { id: item.id } })
            }
          />
        )}
        ListHeaderComponent={
          <View>
            <SearchBar
              value={query}
              onChangeText={setQuery}
              autoFocus
              onClear={() => setQuery("")}
              onSubmit={() => {}}
              placeholder="Search for products or categories"
            />

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              className="mt-3"
              contentContainerStyle={{ gap: 8, paddingRight: 8 }}
            >
              <TouchableOpacity
                onPress={() => setSelectedCategory("all")}
                className={`px-4 py-2 rounded-full border ${
                  selectedCategory === "all"
                    ? "bg-primary border-primary"
                    : "bg-white border-gray-200"
                }`}
              >
                <Text
                  className={`text-sm font-semibold ${
                    selectedCategory === "all" ? "text-white" : "text-gray-800"
                  }`}
                >
                  All
                </Text>
              </TouchableOpacity>

              {categories.map((cat) => (
                <TouchableOpacity
                  key={cat.id}
                  onPress={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-full border ${
                    selectedCategory === cat.id
                      ? "bg-primary border-primary"
                      : "bg-white border-gray-200"
                  }`}
                >
                  <Text
                    className={`text-sm font-semibold ${
                      selectedCategory === cat.id ? "text-white" : "text-gray-800"
                    }`}
                  >
                    {cat.name}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>

            <View className="mt-3 flex-row items-center justify-between">
              <Text className="text-sm text-gray-600">
                {filtered.length} result{filtered.length === 1 ? "" : "s"}
              </Text>
              {query ? (
                <TouchableOpacity onPress={() => setQuery("")}>
                  <Text className="text-sm font-semibold text-primary">Clear search</Text>
                </TouchableOpacity>
              ) : null}
            </View>

            {!query && (
              <View className="mt-4">
                <Text className="text-base font-semibold text-gray-900">
                  Popular searches
                </Text>
                <View className="flex-row flex-wrap gap-2 mt-2">
                  {popularSearches.map((term) => (
                    <TouchableOpacity
                      key={term}
                      onPress={() => handleFillSearch(term)}
                      className="bg-white border border-gray-200 px-3 py-1.5 rounded-full"
                    >
                      <Text className="text-sm font-semibold text-gray-800">{term}</Text>
                    </TouchableOpacity>
                  ))}
                </View>

                <Text className="text-base font-semibold text-gray-900 mt-5 mb-2">
                  Suggested for you
                </Text>
                {/* <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{ gap: 12, paddingVertical: 4, paddingRight: 8 }}
                >
                  {suggested.map((item) => (
                    <ProductCard
                      key={item.id}
                      product={item}
                      onPress={() =>
                        router.push({
                          pathname: "/(app)/product/[id]",
                          params: { id: item.id },
                        })
                      }
                    />
                  ))}
                </ScrollView> */}
              </View>
            )}
          </View>
        }
        ListEmptyComponent={
          <View className="mt-10 items-center">
            <Text className="text-gray-500">No products found</Text>
          </View>
        }
        contentContainerStyle={{ paddingBottom: 32 }}
      />
    </View>
  );
};

export default SearchScreen;

