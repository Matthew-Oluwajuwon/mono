import {
  View,
  Text,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { wp } from "@/utils/helper";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import Input from "@/components/Input";
import Button from "@/components/Button";

const Login = () => {
  const { top, bottom } = useSafeAreaInsets();
  const [isPasswordToggled, setIsPasswordToggled] = useState(false);

  return (
    <TouchableWithoutFeedback className="flex-1" onPress={Keyboard.dismiss}>
      <View className="flex-1 relative bg-white">
        <StatusBar style="light" />
        <View className="absolute z-50 top-20 left-0 flex-row mx-auto px-5 w-full items-center">
          <Ionicons
            name="chevron-back"
            size={24}
            color="white"
            onPress={() => router.back()}
          />
          <Text className="text-center font-InterSemiBold text-2xl text-white mx-auto">
            Login
          </Text>
        </View>
        <Image source={require("@/assets/images/top-bg.png")} className="" />
        <View
          className="flex-1"
          style={{
            paddingTop: top,
            paddingBottom: bottom,
            shadowColor: "#00000020", // iOS
            shadowOffset: { height: 5, width: 5 }, // iOS
            shadowRadius: 10, // iOS
            shadowOpacity: 1, // iOS
            elevation: 10, // Android shadow
          }}
        >
          <View
            className="bg-white rounded-3xl flex-1 mx-auto -mt-44 p-5 py-10 relative"
            style={{
              width: wp(90),
            }}
          >
            <Input
              label="EMAIL"
              inputProps={{ keyboardType: "email-address" }}
            />
            <Input
              label="PASSWORD"
              inputProps={{
                secureTextEntry: !isPasswordToggled,
              }}
              suffix={
                <Ionicons
                  name={isPasswordToggled ? "eye-outline" : "eye-off-outline"}
                  color="black"
                  onPress={() => setIsPasswordToggled(!isPasswordToggled)}
                  size={20}
                />
              }
            />
            <Button type="primary" className="absolute bottom-10 ml-5 w-full">
              Login
            </Button>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Login;
