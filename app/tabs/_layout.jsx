import { View, Text, useWindowDimensions } from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome6";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import FirstTab from "./firstTab";
import SecondTab from "./secondTab";

const TabsLayout = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const routes = [
    { key: "first", title: "First Tab", icon: "house-chimney" },
    { key: "second", title: "Second Tab", icon: "circle-info" },
  ];
  return (
    <TabView
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={SceneMap({
        first: FirstTab,
        second: SecondTab,
      })}
      initialLayout={{ width: layout.width }}
      tabBarPosition="bottom"
      renderTabBar={(props) => (
        <TabBar
          indicatorStyle={{ backgroundColor: "red" }}
          className=" bg-green-500 border-t border-red-500"
          {...props}
          renderIcon={({ route }) => (
            <Icon
              name={route.icon}
              size={25}
              color={
                index === routes.findIndex((r) => r.key === route.key)
                  ? "green"
                  : "red"
              }
            />
          )}
        />
      )}
    />
  );
};

export default TabsLayout;
