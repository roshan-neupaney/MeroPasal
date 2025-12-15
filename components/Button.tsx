import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

interface ButtonProps {
  onPress?: () => void;
  disabled?: boolean;
  label?: string;
  className?: string;
  labelClassName?: string;
  children?: React.ReactNode;
  style?: Object;
}

const Button = ({
  onPress,
  disabled,
  className,
  label,
  labelClassName,
  children,
  style={},
}: ButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      className={`py-4 rounded-2xl ${!disabled ? "bg-primary" : "bg-gray-300"} ${className}`}
    >
      {children ? (
        children
      ) : (
        <Text
          className={`text-white text-center text-lg font-semibold ${labelClassName}`}
          style={style}
        >
          {label}
        </Text>
      )}
    </Pressable>
  );
};

export default Button;
