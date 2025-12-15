import { OnboardingProvider } from "@/context/OnboardingContext";
import { Stack } from "expo-router";
import "./global.css";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import i18n from "@/i18n";

export default function RootLayout() {
  useEffect(() => {
    (async () => {
      const savedLang = await AsyncStorage.getItem("language");
      if (savedLang) {
        i18n.changeLanguage(savedLang);
      }
    })();
  }, []);
  return (
    <SafeAreaProvider>
      <OnboardingProvider>
        <StatusBar barStyle={"dark-content"} />
        <Stack screenOptions={{ headerShown: false, animation: "none" }}>
          <Stack.Screen name="(onboarding)" />
          <Stack.Screen name="(app)/index" />
        </Stack>
      </OnboardingProvider>
    </SafeAreaProvider>
  );
}
