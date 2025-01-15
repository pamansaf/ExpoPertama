import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Home = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-red-500 text-2xl font-bold pb-3">belajar expo</Text>
      <Link href="/about" asChild>
        <TouchableOpacity className="bg-sky-500 py-2 px-3 rounded-md">
          <Text className="text-white">Go ttttto again about</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

export default Home;
