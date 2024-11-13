import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

export interface SingleTransactionProps {
  image: any;
  title: string;
  time: string;
  amount: string;
  type: "CREDIT" | "DEBIT";
}

const SingleTransaction: React.FC<SingleTransactionProps> = ({
  amount,
  image,
  time,
  title,
  type,
}) => {
  return (
    <TouchableOpacity className="flex-row justify-between items-center mb-5">
      <View className="flex-row gap-3">
        <View className="bg-[#F0F6F5] items-center justify-center rounded-xl w-16 h-16">
          <Image source={image} width={10} height={10} />
        </View>
        <View>
          <Text className="font-InterSemiBold text-lg leading-loose">
            {title}
          </Text>
          <Text className="font-InterRegular text-[#666666]">{time}</Text>
        </View>
      </View>
      <View>
        <Text
          className="font-InterSemiBold text-lg"
          style={{ color: type === "CREDIT" ? "#25A969" : "#F95B51" }}
        >
          {type === "CREDIT" ? "+" : "-"} $ {amount}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default SingleTransaction;
