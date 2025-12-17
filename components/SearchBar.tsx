import { View, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { Search, ScanLine } from "lucide-react-native";

type Props = {
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  onSubmit?: () => void;
  autoFocus?: boolean;
  onClear?: () => void;
  editable?: boolean;
};

const SearchBar = ({
  placeholder = "Search products, categories...",
  value,
  onChangeText,
  onSubmit,
  autoFocus = false,
  onClear,
  editable= true,
}: Props) => {
  return (
    <View className="flex-row items-center bg-white rounded-2xl px-3 py-2 shadow-sm">
      <Search size={20} color="#9CA3AF" />
      <TextInput
        placeholder={placeholder}
        className="flex-1 ml-2 text-base text-gray-900"
        value={value}
        editable={editable}
        onChangeText={onChangeText}
        returnKeyType="search"
        onSubmitEditing={onSubmit}
        autoFocus={autoFocus}
      />
      {value ? (
        <TouchableOpacity onPress={onClear}>
          <ScanLine size={20} color="#9CA3AF" />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default SearchBar;

