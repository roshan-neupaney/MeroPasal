import { useOnboarding } from "@/context/OnboardingContext";
import * as Location from "expo-location";
import { useEffect, useState } from "react";
import { Alert, Pressable, Text, View } from "react-native";

export default function LocationPermission() {
  const { next, skipToApp } = useOnboarding();
  const [permission, setPermission] =
    useState<Location.PermissionStatus | null>(null);

  const requestPermission = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    setPermission(status);

    if (status === "granted") {
      const loc = await Location.getCurrentPositionAsync();
      console.log('loc', loc)
      // TODO: check if service available in this area
      //   const serviceAvailable = checkServiceAvailability(loc.coords);

      //   if (serviceAvailable) {
      next(); // go to notification
      //   } else {
      //     next(); // go to map-picker (next step will handle it)
      //   }
    }
  };

  return (
    <View className="flex-1 px-6 justify-between pb-12">
      <View className="mt-20">
        <Text className="text-4xl font-bold text-center mb-4">
          Allow location permission
        </Text>
      </View>
      <View>
        <Pressable
          onPress={requestPermission}
          // disabled={!permission}
          className={`py-4 rounded-2xl bg-black`}
        >
          <Text className="text-white text-center text-lg font-semibold">
            Continue
          </Text>
        </Pressable>

        <Pressable onPress={skipToApp} className="mt-4">
          <Text className="text-center text-gray-600">Skip for now</Text>
        </Pressable>
      </View>
    </View>
  );
}
