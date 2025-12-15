import { View, Text, Pressable, ActivityIndicator } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { useOnboarding } from "@/context/OnboardingContext";
import MapView, {
  MapPressEvent,
  Marker,
  MarkerDragStartEndEvent,
  Region,
} from "react-native-maps";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MotiView } from "moti";
import { useTranslation } from "react-i18next";
import Button from "@/components/Button";

const MapStep = () => {
  const { t } = useTranslation();
  const { next, selectedLocation, setSelectedLocation } = useOnboarding();
  const [initialRegion, setInitialRegion] = useState<Region | undefined>(
    undefined
  );
  const [loading, setLoading] = useState(true);
  const mapRef = useRef(null);

  useEffect(() => {
    (async () => {
      const loc = await AsyncStorage.getItem("location");
      if (loc) {
        await AsyncStorage.setItem("setup", "Completed");
        next();
      }
      const region = {
        latitude: 27.70118010115995,
        longitude: 85.30077181756496,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      };
      setInitialRegion(region);
      setSelectedLocation(region)
      setLoading(false);
    })();
  }, []);

  const handleDragEnd = (e: MarkerDragStartEndEvent) => {
    const coords = e.nativeEvent.coordinate;
    setSelectedLocation(coords);
  };
  
  const handleMapPress = (e: MapPressEvent) => {
    setSelectedLocation(e.nativeEvent.coordinate);
  };

  const handleContinue = async () => {
    await AsyncStorage.setItem("location", JSON.stringify(selectedLocation));
    await AsyncStorage.setItem("setup", "Completed");
    next();
  };

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center bg-white">
        <ActivityIndicator size="large" />
        <Text className="mt-4 text-lg">Loading map...</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 px-6">
      <MotiView
          className="mt-16"
          key={"location"}
          from={{ opacity: 0, translateY: 50 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ type: "timing", duration: 300, delay: 300 }}
        >
          <Text className="text-4xl font-bold text-center py-1">
            {t('select_location')}
          </Text>
          <Text className="text-xl font-bold text-center text-grey mt-4">
          {t('select_location_decs')}
          </Text>
        </MotiView>

      <MapView
        ref={mapRef}
        style={{ flex: 1, borderRadius: 16 }}
        initialRegion={initialRegion}
        showsUserLocation={true}
        onPress={handleMapPress}
        loadingEnabled
      >
        {selectedLocation && (
          <Marker
            coordinate={selectedLocation}
            draggable
            onDragEnd={handleDragEnd}
          />
        )}
      </MapView>

      <MotiView
        key={"locationButton"}
        from={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: "timing", duration: 300, delay: 300 }}
        className="mt-4"
      >
        <Button label={t("continue")} onPress={handleContinue} />
      </MotiView>
    </View>
  );
};

export default MapStep;
