// app/(onboarding)/_layout.tsx
import { Stack } from "expo-router";
import { View, Text, Pressable } from "react-native";
import { useOnboarding } from "../../context/OnboardingContext";
import { ChevronLeft, X } from "lucide-react-native";

export default function OnboardingLayout() {
  const { currentStep, back, skipToApp } = useOnboarding();
  const stepNumber =
    ["language", "location", "notification"].indexOf(currentStep) + 1;

  return (
    
      <View className="flex-1">
        <Stack screenOptions={{ headerShown: false }} />
        {/* <View className="flex-row justify-between items-center p-6 pt-12">
        {stepNumber > 0 ? (
          <Pressable onPress={back} className="flex-row items-center gap-2">
          <ChevronLeft size={24} color="#000" />
          <Text className="text-lg">Back</Text>
          </Pressable>
          ) : <View />}
          
          <Pressable onPress={skipToApp}>
          <X size={24} color="#666" />
          </Pressable>
          </View> */}

        <View className="flex-row justify-center gap-2 my-4">
          {[1, 2, 3].map((i) => (
            <View
              key={i}
              className={`h-2 w-8 rounded-full ${
                i <= stepNumber ? "bg-black" : "bg-gray-300"
              }`}
            />
          ))}
        </View>
      </View>
  );
}
