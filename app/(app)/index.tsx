import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const index = () => {
  return (
    <SafeAreaView edges={["top"]} className="flex-1">
      <Text>index</Text>
    </SafeAreaView>
  );
};

export default index;
