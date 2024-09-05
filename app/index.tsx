import { View, Text, ImageBackground, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

import BeachImage from "@/assets/meditation-images/beach.webp";

const App = () => {
  return (
    <View className="flex-1">
      <ImageBackground
        source={BeachImage}
        resizeMode="cover"
        className="flex-1"
      >
        <LinearGradient
          className="flex-1"
          colors={["rgba(0, 0, 0, 0.4)", "rgba(0, 0, 0, 0.8)"]}
        ></LinearGradient>
        <SafeAreaView className="flex-1 px-1 justify-between">
          <View>
            <Text className="text-center text-white font-bold text-4xl">
              Meditation
            </Text>
            <Text className="text-center text-white text-regular text-2xl mt-3">
              for everyone
            </Text>
          </View>
        </SafeAreaView>
        <StatusBar style="light" />
      </ImageBackground>
    </View>
  );
};

export default App;
