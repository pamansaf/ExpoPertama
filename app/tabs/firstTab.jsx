import { View, Text } from "react-native";
import React from "react";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
import Icon from "react-native-vector-icons/FontAwesome6";

const FirstTab = () => {
  return (
    <Animated.View
      entering={FadeIn.duration(500)}
      exiting={FadeOut.duration(500)}
      className="flex-1 justify-center items-center"
    >
      <Icon name="house-chimney" size={30} color="#22c55e" />
      <Text className="text-2xl font-semibold text-green-500">
        Fist Tab Content
      </Text>
    </Animated.View>
  );
};

export default FirstTab;
