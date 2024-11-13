import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";

const Balance = () => {
  return (
    <View className="bg-[#2F7E79] mx-5 rounded-3xl p-7 mt-5">
      <View className="flex-row justify-between">
        <View>
          <View className="flex-row items-center">
            <Text className="text-white">Total Balance</Text>
            <MaterialIcons name="keyboard-arrow-up" size={20} color="white" />
          </View>
          <Text className="text-3xl font-InterBold text-white mt-1">
            $ 2,500.00
          </Text>
        </View>
        <TouchableOpacity>
          <Entypo name="dots-three-horizontal" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <View className="mt-10 flex-row items-center justify-between">
        <View>
          <View className="flex-row items-center">
            <View className="bg-[#FFFFFF15] p-[0.35rem] rounded-full mr-2">
              <AntDesign name="arrowdown" size={15} color="white" />
            </View>
            <Text className="text-[#D0E5E4] font-InterMedium">Income</Text>
          </View>
          <Text className="text-2xl font-InterBold text-white mt-1">
            $ 1,850.00
          </Text>
        </View>
        <View>
          <View className="flex-row items-center">
            <View className="bg-[#FFFFFF15] p-[0.35rem] rounded-full mr-2">
              <AntDesign name="arrowdown" size={15} color="white" />
            </View>
            <Text className="text-[#D0E5E4] font-InterMedium">Expenses</Text>
          </View>
          <Text className="text-2xl font-InterBold text-white mt-1">
            $ 284.00
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Balance;
