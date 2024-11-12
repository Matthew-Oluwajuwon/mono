import { wp } from "@/utils/helper";
import React from "react";
import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "@/constants/Colors";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";

export default function Index() {
  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" />
      <View className="relative">
        <Image source={require("@/assets/images/bg-welcome.png")} />
        <Image
          source={require("@/assets/images/person-welcome.png")}
          className="absolute left-1/2 -translate-x-1/2"
          style={{
            bottom: -15,
          }}
        />
      </View>
      <View className="my-7 gap-5">
        <Text
          className="text-center mx-auto font-InterBold text-5xl text-primary-light"
          style={{
            width: wp(70),
          }}
        >
          Spend Smarter Save More
        </Text>
        <View
          style={{
            width: wp(90),
            // padding: 15,
            borderRadius: 100,
            margin: "auto",
            shadowColor: "#69AEA9", // iOS
            shadowOffset: { height: 5, width: 5 }, // iOS
            shadowRadius: 10, // iOS
            shadowOpacity: 1, // iOS
            elevation: 10, // Android shadow
          }}
        >
          <TouchableOpacity onPress={() => router.navigate("/signup")} className="z-50 w-full rounded-full">
            <LinearGradient
              style={{
                width: "100%",
                padding: 15,
                borderRadius: 100,
              }}
              colors={[Colors.gradientOne, Colors.gradientTwo]}
            >
              <Text className="text-white text-center font-InterSemiBold">
                Get Started
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
      <Text className="text-center font-InterMedium">
        Already have an account?{" "}
        <Pressable className="-mb-1" onPress={() => router.navigate("/login")}>
          <Text className="text-primary-light font-InterMedium">Log In</Text>
        </Pressable>
      </Text>
    </View>
  );
}
