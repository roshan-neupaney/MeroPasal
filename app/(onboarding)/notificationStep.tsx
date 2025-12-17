import { View, Text, Alert } from "react-native";
import React from "react";
import { useOnboarding } from "@/context/OnboardingContext";
import Button from "@/components/Button";
import { MotiImage, MotiView } from "moti";
import { useTranslation } from "react-i18next";
import * as Notifications from "expo-notifications";

const NotificationStep = () => {
  const { next } = useOnboarding();
  const { t } = useTranslation();

  const requestNotificationPermission = async () => {
    try {
      const { status } = await Notifications.requestPermissionsAsync();
      if (status === "granted") {
        next();
      } else {
        Alert.alert(
          "Notifications Disabled",
          "You can always enable them later in settings. Continuing without notifications.",
          [{ text: "OK", onPress: next }]
        );
      }
    } catch (error) {
      console.error("Notification permission error:", error);
      Alert.alert("Error", "Something went wrong. Skipping this step.");
      next();
    }
  };
  return (
    <View className="flex-1 justify-between px-6">
      <View className="flex-1 justify-center items-center">
        <MotiImage
          from={{
            scale: 0.5,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            type: "spring",
            damping: 10,
            mass: 1,
            stiffness: 300,
            delay: 300,
          }}
          source={require("@/assets/images/notification.png")}
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
            {t("notification_title")}
          </Text>
          <Text className="text-2xl font-bold text-center text-grey mt-4">
            {t("notification_desc")}
          </Text>
        </MotiView>
      </View>
      <MotiView
        key={"notificationButton"}
        from={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: "timing", duration: 300, delay: 300 }}
      >
        <Button label={t("continue")} onPress={requestNotificationPermission} />
        <View className="flex flex-row justify-end">
          <Button
            onPress={next}
            className="py-0 mt-4 bg-transparent w-16"
            style={{ fontSize: 14, fontWeight: "bold", color: "#4b5563" }}
            label={t("later")}
          />
        </View>
      </MotiView>
    </View>
  );
};

export default NotificationStep;
