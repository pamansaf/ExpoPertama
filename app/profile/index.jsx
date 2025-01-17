import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const Profile = () => {
  const router = useRouter();
  return (
    <View className="flex-1 justify-center items-center bg-pink-200">
      <Text className="text-2xl text-blue-600">My Profile</Text>
      <TouchableOpacity
        onPress={() => router.push("/profile/setting")}
        className="bg-pink-500 p-3 my-3"
      >
        <Text className="text-white">Go to setting</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
