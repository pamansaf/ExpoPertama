import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Link, useRouter } from "expo-router";
import Animated, {
  FadeIn,
  FadeOut,
  SlideInLeft,
  SlideInRight,
  ZoomIn,
  ZoomOut,
} from "react-native-reanimated";
const user = () => {
  const router = useRouter();
  return (
    <Animated.View
      // entering={FadeIn.duration(500)}
      // exiting={FadeOut.duration(500)}
      entering={ZoomIn.duration(500)}
      exiting={ZoomOut.duration(500)}
      className="flex-1 justify-center items-center"
    >
      <Text className="bg-pink-300 p-3 text-black-500 text-2xl font-bold mb-3">
        User Profile
      </Text>
      {/* <Link href="/about" asChild>
        <TouchableOpacity className="bg-sky-500 py-2 px-3 rounded-md">
          <Text className="text-white">Go ttttto again about</Text>
        </TouchableOpacity>
      </Link> */}

      <TouchableOpacity
        className="bg-green-500 py-2 px-3 rounded-md"
        onPress={() => router.push("/")}
      >
        <Text className="text-white">Go to Home</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default user;
