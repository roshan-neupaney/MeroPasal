import { OnboardingProvider } from "@/context/OnboardingContext";
import { Stack } from "expo-router";
import "./global.css";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <OnboardingProvider>
        <StatusBar barStyle={'dark-content'} />
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(onboarding)" />
          <Stack.Screen name="(app)/index" />
        </Stack>
      </OnboardingProvider>
    </SafeAreaProvider>
  );
}
