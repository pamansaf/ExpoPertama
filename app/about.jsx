import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Link } from "expo-router";

const about = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-2xl font-bold pb-3">About</Text>
      <Link href="/" asChild>
        <TouchableOpacity className="bg-red-500 py-2 px-3 rounded-md">
          <Text className="text-white">Go to home</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

export default about;
