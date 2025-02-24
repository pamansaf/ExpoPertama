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
const about = () => {
  const router = useRouter();
  return (
    <Animated.View
      // entering={FadeIn.duration(500)}
      // exiting={FadeOut.duration(500)}
      entering={ZoomIn.duration(300)}
      exiting={ZoomOut.duration(300)}
      className="flex-1 justify-center items-center"
    >
      <Text className="bg-sky-300 p-3 text-black-500 text-2xl font-bold mb-3">
        About
      </Text>
      {/* <Link href="/about" asChild>
        <TouchableOpacity className="bg-sky-500 py-2 px-3 rounded-md">
          <Text className="text-white">Go ttttto again about</Text>
        </TouchableOpacity>
      </Link> */}

      <TouchableOpacity
        className="bg-green-500 py-2 px-3 rounded-md mb-3"
        onPress={() => router.push("/")}
      >
        <Text className="text-white">Go to Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="bg-green-500 py-2 px-3 rounded-md mb-3"
        onPress={() => router.push("/user")}
      >
        <Text className="text-white">Go to User</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default about;
