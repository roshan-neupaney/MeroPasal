import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MapPin, Bell, ChevronDown, Coins } from "lucide-react-native";
import * as Location from 'expo-location';
import AsyncStorage from "@react-native-async-storage/async-storage";

type Props = {
  locationLabel?: string;
  eta?: string;
  coins?: number;
};

const HomeHeader = ({
  eta = "45 mins",
  coins = 0,
}: Props) => {
  const [location , setLocation] = useState({city: '-', district: '-'});
  useEffect(() => {
    const getLocation = async() => {
      try {
        const savedLocation = await AsyncStorage.getItem('location');
        if(savedLocation){
          const parsedLocation : { latitude: number; longitude: number } = JSON.parse(savedLocation);
          const loc = await Location.reverseGeocodeAsync({longitude: parsedLocation.longitude, latitude: parsedLocation.latitude});
          setLocation({city: loc[0].city || '-', district: loc[0].subregion ||'-'})
        }
      } catch (e) {
        console.log("Location permission error:", e);
      }
    }
    getLocation();
  }, [])

  return (
    <View className="bg-primary p-4 mb-4">
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center">
          <MapPin size={18} color="#fff" />
          <Text className="text-white font-semibold text-base ml-2" numberOfLines={1}>
            Delivering to
          </Text>
        </View>
        <Bell size={18} color="#fff" />
      </View>
      <View className="flex-row items-center mt-1">
        <Text className="text-white text-lg font-bold flex-shrink">{location.city}, {location.district}</Text>
      </View>

      <View className="flex-row items-center mt-3">
        <TouchableOpacity className="bg-white/10 px-3 py-1.5 rounded-full mr-2">
          <Text className="text-white text-sm font-semibold">{eta}</Text>
        </TouchableOpacity>
        <View className="bg-white px-3 py-1.5 rounded-full flex-row items-center">
          <Coins size={16} color="#D97706" />
          <Text className="text-sm font-semibold text-gray-800 ml-1">{coins} Coins</Text>
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;

