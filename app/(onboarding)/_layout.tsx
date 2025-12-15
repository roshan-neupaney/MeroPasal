import { router, Stack } from "expo-router";
import { View } from "react-native";
import { useOnboarding } from "../../context/OnboardingContext";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function OnboardingLayout() {
  const { currentStep, steps } = useOnboarding();
  const [isLoading, setIsLoading] = useState(true);
  
  const stepNumber = steps.indexOf(currentStep);
  useEffect(() => {
    const checkSetup = async () => {
      const isSetup = await AsyncStorage.getItem("setup");
      if (isSetup === "Completed") {
        router.replace("/(app)");
      }
      setIsLoading(false);
    };
    checkSetup();
  }, []);

  if(isLoading) return;

  return (
    <SafeAreaView edges={["top"]} className="flex-1 pb-6 bg-[#f2f2f2]">
      <View className="flex-1">
        <Stack
          screenOptions={{
            headerShown: false,
            animation: "slide_from_right",
            gestureEnabled: false,
          }}
        />
        <View className="flex-row justify-center gap-2 my-4">
          {steps.map((_, i) => (
            <View
              key={i}
              className={`h-2 w-8 rounded-full ${
                i <= stepNumber ? "bg-primary" : "bg-gray-300"
              }`}
            />
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}
