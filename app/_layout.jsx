import { View, Text } from "react-native";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import Icon from "react-native-vector-icons/FontAwesome6";

const Layout = () => {
  return (
    <GestureHandlerRootView>
      <Drawer>
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: "Home",
            title: "Home Screen",
            drawerIcon: ({ color }) => (
              <Icon name="house-chimney" size={24} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="about"
          options={{
            drawerLabel: "About",
            title: "About Screen",
            drawerIcon: ({ color }) => (
              <Icon name="circle-info" size={24} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="tabs"
          options={{
            drawerLabel: "Setting",
            title: "Tab Screen",
            drawerIcon: ({ color }) => (
              <Icon name="gear" size={24} color={color} />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
};

export default Layout;
