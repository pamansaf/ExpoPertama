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
const Home = () => {
  const router = useRouter();
  return (
    <Animated.View
      // entering={FadeIn.duration(300)}
      // exiting={FadeOut.duration(300)}
      entering={ZoomIn.duration(300)}
      exiting={ZoomOut.duration(300)}
      className="flex-1 justify-center items-center"
    >
      <Text className="bg-yellow-300 p-3 text-red-500 text-2xl font-bold mb-3">
        Home
      </Text>
      {/* <Link href="/about" asChild>
        <TouchableOpacity className="bg-sky-500 py-2 px-3 rounded-md">
          <Text className="text-white">Go ttttto again about</Text>
        </TouchableOpacity>
      </Link> */}

      <TouchableOpacity
        className="bg-sky-500 py-2 px-3 rounded-md"
        onPress={() => router.push("/about")}
      >
        <Text className="text-white">Go to About</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default Home;
