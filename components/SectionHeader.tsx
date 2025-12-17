import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

type Props = {
  title: string;
  actionLabel?: string;
  onPressAction?: () => void;
  className?: string;
};

const SectionHeader = ({ title, actionLabel = "See all", onPressAction, className }: Props) => {
  return (
    <View className={`flex-row items-center justify-between mb-3 ${className ?? ""}`}>
      <Text className="text-xl font-semibold text-gray-900">{title}</Text>
      {actionLabel && onPressAction && (
        <TouchableOpacity onPress={onPressAction} className="rounded-full px-3 py-1 bg-gray-100">
          <Text className="text-sm font-semibold text-primary">{actionLabel}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SectionHeader;

