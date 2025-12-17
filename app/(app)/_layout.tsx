import { Stack } from "expo-router";
import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const AppLayout = () => {
  return (
    <SafeAreaView edges={["top"]} className="flex-1">
      <View className="flex-1">
        <Stack
          screenOptions={{
            headerShown: false,
            animation: "slide_from_right",
            gestureEnabled: false,
          }}
        >
          <Stack.Screen name="product/[id]" options={{ presentation: "modal" }} />
        </Stack>
      </View>
    </SafeAreaView>
  );
};

export default AppLayout;
