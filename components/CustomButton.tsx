import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

interface CustomButtonProp {
  onPress: () => void;
  title: string;
  textStyles?: string;
  containerStyles?: string;
}

const CustomButton = ({
  onPress,
  title,
  textStyles = "",
  containerStyles = "",
}: CustomButtonProp) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className={`bg-white rounded-xl min-h-[67px] justify-center ${containerStyles}`}
      onPress={onPress}
    >
      <Text className={`font-semibold text-lg ${textStyles}`}>
        CustomButton
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
