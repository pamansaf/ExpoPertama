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
import { useDrawerStatus } from "@react-navigation/drawer";
import { StatusBar } from "expo-status-bar";

const Home = () => {
  const router = useRouter();
  const isDrawerOpen = useDrawerStatus() === "open";
  return (
    <Animated.View
      // entering={FadeIn.duration(300)}
      // exiting={FadeOut.duration(300)}
      entering={ZoomIn.duration(300)}
      exiting={ZoomOut.duration(300)}
      className="flex-1 justify-center items-center"
    >
      <StatusBar style="auto" />
      {isDrawerOpen ? (
        <Text className="text-2xl text-green-500 font-bold">
          Drawer is open
        </Text>
      ) : (
        <Text className="text-2xl text-red-500 font-bold">Drawer is close</Text>
      )}
      <Text className="bg-yellow-300 p-3 text-red-500 text-2xl font-bold my-3">
        Home
      </Text>
      {/* <Link href="/about" asChild>
        <TouchableOpacity className="bg-sky-500 py-2 px-3 rounded-md">
          <Text className="text-white">Go ttttto again about</Text>
        </TouchableOpacity>
      </Link> */}

      <TouchableOpacity
        className="bg-green-500 py-2 px-3 rounded-md mb-3"
        onPress={() => router.push("/about")}
      >
        <Text className="text-white">Go to About</Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="bg-sky-500 py-2 px-3 rounded-md mb-3"
        onPress={() => router.push("/tabs")}
      >
        <Text className="text-white">Go to Tab Screen</Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="bg-slate-800 py-2 px-3 rounded-md mb-3"
        onPress={() => router.push("/user")}
      >
        <Text className="text-white">Go to User</Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="bg-pink-500 py-2 px-3 rounded-md mb-3"
        onPress={() => router.push("/profile")}
      >
        <Text className="text-white">Go to User Profile</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default Home;
