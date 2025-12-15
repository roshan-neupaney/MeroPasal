import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";

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
        />
      </View>
    </SafeAreaView>
  );
};

export default AppLayout;
