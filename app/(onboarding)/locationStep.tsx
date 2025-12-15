import Button from "@/components/Button";
import { useOnboarding } from "@/context/OnboardingContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Location from "expo-location";
import { MotiImage, MotiView } from "moti";
import { useTranslation } from "react-i18next";
import { Alert, Text, View } from "react-native";

export default function LocationStep() {
  const { next } = useOnboarding();
  const { t } = useTranslation();

  const requestPermission = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status === "granted") {
      const loc = await Location.getCurrentPositionAsync();
      await AsyncStorage.setItem(
        "location",
        JSON.stringify({
          longitude: loc.coords.longitude,
          latitude: loc.coords.latitude,
        })
      );
      next();
    } else {
      Alert.alert(
        "Permission Denied",
        "You can always enable them later in settings. Continue.",
        [{ text: "OK", onPress: next }]
      );
    }
  };

  return (
    <View className="flex-1 justify-between px-6">
      <View className="flex-1 justify-center items-center">
        <MotiImage
          from={{
            scale: 0.5,
            opacity: 0,
            translateY: 100,
          }}
          animate={{
            scale: 1,
            opacity: 1,
            translateY: 0,
          }}
          transition={{
            type: "spring",
            damping: 10,
            mass: 1,
            stiffness: 300,
            delay: 300,
          }}
          source={require("@/assets/images/mapMarker.png")}
          style={{ width: 250, height: 250 }}
          resizeMode="contain"
          className="mt-16"
        />
        <MotiView
          className="mt-16"
          key={"location"}
          from={{ opacity: 0, translateY: 50 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ type: "timing", duration: 300, delay: 300 }}
        >
          <Text className="text-4xl font-bold text-center py-1">
            {t('location_nearby_title')}
          </Text>
          <Text className="text-2xl font-bold text-center text-grey mt-4">
          {t('location_nearby_desc')}
          </Text>
        </MotiView>
      </View>
      <MotiView
        key={"locationButton"}
        from={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: "timing", duration: 300, delay: 300 }}
      >
        <Button label={t("continue")} onPress={requestPermission} />
        <View className="flex flex-row justify-end">
          <Button
            onPress={next}
            className="!py-2 bg-transparent w-16"
            style={{ fontSize: 14, fontWeight: "bold", color: "#4b5563",  }}
            label={t("later")}
          />
        </View>
      </MotiView>
    </View>
  );
}
