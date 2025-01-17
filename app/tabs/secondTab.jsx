import { View, Text } from "react-native";
import React from "react";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
import Icon from "react-native-vector-icons/FontAwesome6";

const SecondTab = () => {
  return (
    <Animated.View
      entering={FadeIn.duration(500)}
      exiting={FadeOut.duration(500)}
      className="flex-1 justify-center items-center"
    >
      <Icon name="circle-info" size={30} color="#eab308" />
      <Text className="text-2xl font-semibold text-yellow-500">
        Second Tab Content
      </Text>
    </Animated.View>
  );
};

export default SecondTab;
