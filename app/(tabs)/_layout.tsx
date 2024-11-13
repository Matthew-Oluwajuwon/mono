import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { Tabs, useSegments } from "expo-router";
import HomeSvg from "@/assets/svg/homeSvg";
import ExpenseSvg from "@/assets/svg/expenseSvg";
import WalletSvg from "@/assets/svg/walletSvg";
import ProfileSvg from "@/assets/svg/profileSvg";
import Entypo from '@expo/vector-icons/Entypo';

const FloatingButton = () => (
  <View className="absolute bottom-16 left-1/2 -translate-x-1/2 p-3 bg-[#FBFBFB] rounded-full flex items-center justify-center">
    <TouchableOpacity
      className="p-5 bg-[#429690] rounded-full"
      onPress={() => {
        /* Add your handler here */
      }}
    >
      <Entypo name="plus" size={30} color="white" />
    </TouchableOpacity>
  </View>
);

const TabLayout = () => {
  // Get the current route segments
  const segments = useSegments();

  // Check if the current screen is "Home"
  const isHomeScreen = segments[1] === "(home)";

  return (
    <View className="flex-1">
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            justifyContent: "space-around", // Align icons with even spacing
          },
        }}
      >
        <Tabs.Screen
          name="(home)/index"
          options={{
            tabBarIcon: ({ focused }) => <HomeSvg isActive={focused} />,
            headerShown: false,
          }}
        />
        <Tabs.Screen
          name="(expenses)/index"
          options={{
            tabBarIcon: ({ focused }) => (
              <View className={isHomeScreen ? "mr-10" : ""}>
                <ExpenseSvg isActive={focused} />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="(wallet)/index"
          options={{
            tabBarIcon: ({ focused }) => (
              <View className={isHomeScreen ? "ml-10" : ""}>
                <WalletSvg isActive={focused} />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="(profile)/index"
          options={{
            tabBarIcon: ({ focused }) => <ProfileSvg isActive={focused} />,
          }}
        />
      </Tabs>

      {/* Show Floating Button only on the "Home" screen */}
      {isHomeScreen && <FloatingButton />}
    </View>
  );
};

export default TabLayout;
